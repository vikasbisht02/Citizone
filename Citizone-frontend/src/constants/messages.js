// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  INVALID_CREDENTIALS: 'Invalid email or password.',
  EMAIL_EXISTS: 'Email already registered. Please login or use another email.',
  WEAK_PASSWORD: 'Password must be at least 8 characters with uppercase, lowercase, and numbers.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  REQUIRED_FIELD: 'This field is required.',
  PASSWORD_MISMATCH: 'Passwords do not match.',
  TOKEN_EXPIRED: 'Your session has expired. Please login again.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  SERVER_ERROR: 'Server error. Please try again later.',
  SOMETHING_WENT_WRONG: 'Something went wrong. Please try again.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Login successful! Redirecting...',
  REGISTER_SUCCESS: 'Registration successful! Please verify your email.',
  LOGOUT_SUCCESS: 'Logged out successfully.',
  PROFILE_UPDATED: 'Profile updated successfully.',
  PASSWORD_CHANGED: 'Password changed successfully.',
  EMAIL_VERIFIED: 'Email verified successfully.',
  PASSWORD_RESET_EMAIL_SENT: 'Password reset link sent to your email.',
  PASSWORD_RESET_SUCCESS: 'Password reset successful. Please login with your new password.',
};

// Info Messages
export const INFO_MESSAGES = {
  VERIFYING_EMAIL: 'Verifying email...',
  LOGGING_IN: 'Logging in...',
  REGISTERING: 'Creating your account...',
  LOADING: 'Loading...',
};
