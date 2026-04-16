// API Base URL - from environment variables
const API_BASE_URL = 'http://localhost:5000';

// API Version
const API_VERSION = 'citizone/v1/api/auth';

// Auth Endpoints - Email Authentication
export const AUTH_ENDPOINTS = {
  // Email Auth
  REGISTER_EMAIL: `${API_VERSION}/registerAuth/email`,
  LOGIN_EMAIL: `${API_VERSION}/loginAuth/email`,
  
  // Mobile Auth
  MOBILE_AUTH: `${API_VERSION}/mobileAuth/number`,
  
  // OTP Verification
  VERIFY_OTP: `${API_VERSION}/verificationAuth/verify-code`,
  
  // Password Recovery
  FORGOT_PASSWORD: `${API_VERSION}/verificationAuth/forgot-password`,
  RESET_PASSWORD: `${API_VERSION}/verificationAuth/reset-password`,
  
  // Logout
  LOGOUT: `${API_VERSION}/verifiedAuth/logout-user`,
  
  // Get current user (protected)
  GET_CURRENT_USER: `${API_VERSION}/verificationAuth/current-user`,
  
  // Firebase
  FIREBASE_VERIFY: `${API_VERSION}/firebase/verify`,
};

// Health Check
export const HEALTH_CHECK = 'citizone/api/health';

export { API_BASE_URL };
