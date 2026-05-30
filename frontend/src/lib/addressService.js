/**
 * addressService.js
 * All Strapi Address API interactions.
 *
 * Ownership is enforced server-side via the X-Supabase-Id header.
 * The caller must always pass the Supabase user ID.
 */

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = import.meta.env.VITE_STRAPI_API_TOKEN;

function getHeaders(supabaseId) {
  const headers = { 'Content-Type': 'application/json' };
  if (STRAPI_API_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
  }
  if (supabaseId) {
    headers['X-Supabase-Id'] = supabaseId;
  }
  return headers;
}

/**
 * Fetch all addresses for a customer.
 * @param {string} supabaseId - The Supabase user ID.
 * @returns {Promise<Array>} Array of address objects.
 */
export async function fetchAddresses(supabaseId) {
  console.log('[Address] Fetch Started');
  const res = await fetch(`${STRAPI_URL}/api/addresses`, {
    headers: getHeaders(supabaseId),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    console.error('[Address] Fetch Error:', err);
    throw new Error(err?.error?.message || `Fetch failed: ${res.status}`);
  }

  const data = await res.json();
  console.log('[Address] Fetch Success —', data.data?.length ?? 0, 'address(es)');
  return data.data || [];
}

/**
 * Create a new address linked to the customer.
 * @param {string} supabaseId - The Supabase user ID.
 * @param {Object} addressData - Address fields.
 * @returns {Promise<Object>} Created address.
 */
export async function createAddress(supabaseId, addressData) {
  console.log('[Address] Create Started');
  const res = await fetch(`${STRAPI_URL}/api/addresses`, {
    method: 'POST',
    headers: getHeaders(supabaseId),
    body: JSON.stringify({ data: addressData }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    console.error('[Address] Create Error:', err);
    throw new Error(err?.error?.message || `Create failed: ${res.status}`);
  }

  const data = await res.json();
  console.log('[Address] Create Success — id:', data.data?.id);
  return data.data;
}

/**
 * Update an existing address.
 * @param {string} supabaseId - The Supabase user ID.
 * @param {string|number} addressId - Strapi address documentId or id.
 * @param {Object} addressData - Fields to update.
 * @returns {Promise<Object>} Updated address.
 */
export async function updateAddress(supabaseId, addressId, addressData) {
  console.log('[Address] Update Started — id:', addressId);
  const res = await fetch(`${STRAPI_URL}/api/addresses/${addressId}`, {
    method: 'PUT',
    headers: getHeaders(supabaseId),
    body: JSON.stringify({ data: addressData }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    console.error('[Address] Update Error:', err);
    throw new Error(err?.error?.message || `Update failed: ${res.status}`);
  }

  const data = await res.json();
  console.log('[Address] Update Success — id:', addressId);
  return data.data;
}

/**
 * Delete an address.
 * @param {string} supabaseId - The Supabase user ID.
 * @param {string|number} addressId - Strapi address documentId or id.
 * @returns {Promise<void>}
 */
export async function deleteAddress(supabaseId, addressId) {
  console.log('[Address] Delete Started — id:', addressId);
  const res = await fetch(`${STRAPI_URL}/api/addresses/${addressId}`, {
    method: 'DELETE',
    headers: getHeaders(supabaseId),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    console.error('[Address] Delete Error:', err);
    throw new Error(err?.error?.message || `Delete failed: ${res.status}`);
  }

  console.log('[Address] Delete Success — id:', addressId);
}
