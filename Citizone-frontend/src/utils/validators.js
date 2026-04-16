/**
 * Validate email
 * @param {string} email - Email to validate
 * @returns {boolean} - Is valid email
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {boolean} - Is valid password
 */
export const isValidPassword = (password) => {
  // At least 8 chars, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

/**
 * Validate phone number
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - Is valid phone number
 */
export const isValidPhone = (phone) => {
  // Indian phone number format
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone);
};

/**
 * Check if email and password are valid
 * @param {string} email - Email to validate
 * @param {string} password - Password to validate
 * @returns {{email: boolean, password: boolean}} - Validation results
 */
export const validateLoginForm = (email, password) => {
  return {
    email: isValidEmail(email),
    password: password.length > 0,
  };
};

/**
 * Check if all required fields are valid for registration
 * @param {Object} formData - Form data object
 * @returns {{fullName: boolean, email: boolean, password: boolean, confirmPassword: boolean, phone?: boolean}} - Validation results
 */
export const validateRegisterForm = (formData) => {
  const { fullName, email, password, confirmPassword, phoneNumber } = formData;
  
  return {
    fullName: fullName && fullName.trim().length > 2,
    email: isValidEmail(email),
    password: isValidPassword(password),
    confirmPassword: password === confirmPassword,
    ...(phoneNumber && { phoneNumber: isValidPhone(phoneNumber) }),
  };
};

/**
 * Get validation error message
 * @param {string} field - Field name
 * @returns {string} - Error message
 */
export const getValidationError = (field) => {
  const errors = {
    fullName: 'Full name must be at least 3 characters',
    email: 'Please enter a valid email address',
    password: 'Password must be at least 8 characters with uppercase, lowercase, and numbers',
    confirmPassword: 'Passwords do not match',
    phoneNumber: 'Please enter a valid 10-digit phone number',
  };
  
  return errors[field] || 'Invalid input';
};
