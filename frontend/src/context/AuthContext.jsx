import { createContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { syncCustomer, fetchCustomerBySupabaseId } from '../lib/customerService';
import toast from 'react-hot-toast';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  /**
   * Restore or create customer from Strapi based on the authenticated Supabase user.
   * On login: fetch existing customer.
   * On signup (first-time email verification): create + return.
   */
  const loadCustomer = useCallback(async (supabaseUser) => {
    if (!supabaseUser) {
      setCustomer(null);
      return null;
    }

    try {
      const result = await syncCustomer(supabaseUser);
      if (result) {
        setCustomer(result);
        return result;
      } else {
        // syncCustomer returned null — customer could not be found or created
        console.warn('Customer sync returned null for user:', supabaseUser.id);
        setCustomer(null);
        return null;
      }
    } catch (err) {
      console.error('Error syncing customer with Strapi:', err);
      toast.error('Could not sync customer profile. Please refresh the page.');
      setCustomer(null);
      return null;
    }
  }, []);

  /**
   * On page load / refresh: restore Supabase session and customer data.
   */
  useEffect(() => {
    let mounted = true;

    const initializeAuth = async () => {
      try {
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        if (!mounted) return;

        setSession(currentSession);
        setUser(currentSession?.user ?? null);

        if (currentSession?.user) {
          // Session restored — fetch customer from Strapi (don't create, just fetch)
          try {
            const existingCustomer = await fetchCustomerBySupabaseId(currentSession.user.id);
            if (mounted) {
              setCustomer(existingCustomer);
            }
          } catch (err) {
            console.error('Error fetching customer on session restore:', err);
          }
        }
      } catch (err) {
        console.error('Error initializing auth session:', err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    initializeAuth();

    // Listen for auth state changes (login, logout, token refresh, email verification)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      if (!mounted) return;

      setSession(newSession);
      setUser(newSession?.user ?? null);

      if (newSession?.user) {
        if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
          // Full sync: find or create customer
          await loadCustomer(newSession.user);
        } else if (event === 'TOKEN_REFRESHED') {
          // Token refresh — only fetch if customer not already in state
          if (!customer) {
            try {
              const existingCustomer = await fetchCustomerBySupabaseId(newSession.user.id);
              if (mounted) setCustomer(existingCustomer);
            } catch (err) {
              console.error('Error fetching customer on token refresh:', err);
            }
          }
        }
      } else {
        // Signed out
        setCustomer(null);
      }

      if (mounted) setLoading(false);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [loadCustomer]); // eslint-disable-line react-hooks/exhaustive-deps

  // ─── Auth Actions ──────────────────────────────────────────────────────────

  /**
   * Register a new user.
   * Customer creation happens when they verify their email and SIGNED_IN fires.
   */
  const signUp = async ({ name, email, password }) => {
    try {
      const { data: authData, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: name },
        },
      });
      if (error) throw error;
      return { data: authData, error: null };
    } catch (error) {
      toast.error(error.message || 'Error creating account');
      return { data: null, error };
    }
  };

  /**
   * Sign in existing user.
   * onAuthStateChange fires SIGNED_IN → loadCustomer runs.
   */
  const signIn = async ({ email, password }) => {
    try {
      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      return { data: authData, error: null };
    } catch (error) {
      toast.error(error.message || 'Invalid login credentials');
      return { data: null, error };
    }
  };

  /**
   * Sign out the current user.
   * Clears both Supabase session and local customer state.
   */
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setCustomer(null);
      toast.success('Successfully logged out');
    } catch (error) {
      toast.error(error.message || 'Error logging out');
    }
  };

  /**
   * Send a password reset email.
   */
  const resetPassword = async (email) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) throw error;
      return { error: null };
    } catch (error) {
      toast.error(error.message || 'Error sending password reset email');
      return { error };
    }
  };

  const value = {
    user,
    session,
    customer,
    setCustomer,
    loading,
    signUp,
    signIn,
    signOut,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
