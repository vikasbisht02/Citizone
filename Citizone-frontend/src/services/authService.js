import apiClient from './apiClient';
import { AUTH_ENDPOINTS } from '../constants/apiEndpoints';
import { handleApiError } from '../utils/errorHandler';

/**
 * Register user with email
 * @param {Object} data - Registration data { email, password, confirmPassword }
 * @returns {Promise<Object>} - API response
 */
export const registerByEmail = async (data) => {
  try {
    const response = await apiClient.post(AUTH_ENDPOINTS.REGISTER_EMAIL, data);
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

/**
 * Login user with email
 * @param {Object} data - Login credentials { email, password }
 * @returns {Promise<Object>} - API response with user data
 */
export const loginByEmail = async (data) => {
  try {
    const response = await apiClient.post(AUTH_ENDPOINTS.LOGIN_EMAIL, data);
    // Cookie is automatically set by the backend in httpOnly cookie
    // No need to manually store in localStorage
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

/**
 * Authenticate or register using mobile number (sends OTP)
 * @param {string} number - Mobile number
 * @returns {Promise<Object>} - API response with OTP sent
 */
export const mobileAuth = async (number) => {
  try {
    const response = await apiClient.post(AUTH_ENDPOINTS.MOBILE_AUTH, { number });
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

/**
 * Verify OTP for email or mobile authentication
 * @param {string} verificationCode - OTP code
 * @returns {Promise<Object>} - API response with authentication
 */
export const verifyOTP = async (verificationCode) => {
  try {
    const response = await apiClient.post(AUTH_ENDPOINTS.VERIFY_OTP, { verificationCode });
    // Cookie is automatically set by the backend in httpOnly cookie
    // No need to manually store in localStorage
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

/**
 * Request password reset email
 * @param {string} email - User email
 * @returns {Promise<Object>} - API response
 */
export const forgotPassword = async (email) => {
  try {
    const response = await apiClient.post(AUTH_ENDPOINTS.FORGOT_PASSWORD, { email });
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

/**
 * Reset password with token
 * @param {Object} data - Reset data { token, password, confirmPassword }
 * @returns {Promise<Object>} - API response
 */
export const resetPassword = async (data) => {
  try {
    const response = await apiClient.post(AUTH_ENDPOINTS.RESET_PASSWORD, data);
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

/**
 * Logout user
 * @returns {Promise<Object>} - API response
 */
export const logoutUser = async () => {
  try {
    await apiClient.post(AUTH_ENDPOINTS.LOGOUT);
    // Cookie is automatically cleared by the backend
  } catch (error) {
    // Even if the request fails, consider user logged out
    throw new Error(handleApiError(error));
  }
};

/**
 * Get current logged-in user
 * @returns {Promise<Object>} - Current user data
 */
export const getCurrentUser = async () => {
  try {
    const response = await apiClient.post(AUTH_ENDPOINTS.GET_CURRENT_USER);
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

/**
 * Verify Firebase token
 * @param {string} idToken - Firebase ID token
 * @returns {Promise<Object>} - Firebase verification response
 */
export const verifyFirebaseToken = async (idToken) => {
  try {
    const response = await apiClient.post(AUTH_ENDPOINTS.FIREBASE_VERIFY, { idToken });
    // Cookie is automatically set by the backend in httpOnly cookie
    // No need to manually store in localStorage
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};
