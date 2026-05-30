import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { FiMail, FiCheckCircle } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    const { error } = await resetPassword(email);
    setIsSubmitting(false);

    if (!error) {
      setIsSuccess(true);
      toast.success('Password reset email sent');
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <FiCheckCircle className="mx-auto h-16 w-16 text-brand-500" />
        <h2 className="mt-4 text-2xl font-bold text-gray-900">Check your email</h2>
        <p className="mt-2 text-gray-600">
          We've sent password reset instructions to <span className="font-medium text-gray-900">{email}</span>.
        </p>
        <div className="mt-8">
          <Link
            to="/login"
            className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-brand-600 bg-brand-50 hover:bg-brand-100 transition-colors"
          >
            Return to Login
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <>
      <div>
        <h2 className="mt-2 text-center text-2xl font-bold text-gray-900">
          Reset Password
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Enter your email to receive reset instructions
        </p>
      </div>

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiMail className="text-gray-400" />
            </div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-brand-500 focus:border-brand-500 text-sm"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              'Send Reset Link'
            )}
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <Link
          to="/login"
          className="font-medium text-brand-600 hover:text-brand-500 text-sm"
        >
          &larr; Back to Login
        </Link>
      </div>
    </>
  );
}
