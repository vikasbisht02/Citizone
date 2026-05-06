import { 
  signInWithPhoneNumber, 
  RecaptchaVerifier
} from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

let confirmationResult = null;
let recaptchaVerifier = null;

/**
 * Initialize reCAPTCHA verifier for phone authentication
 * @param {string} containerId - DOM element ID where reCAPTCHA will be rendered
 * @returns {RecaptchaVerifier}
 */
export const initializeRecaptcha = (containerId = 'recaptcha-container') => {
  if (typeof window === 'undefined') return null;
  
  // Reuse existing verifier if it exists
  if (recaptchaVerifier) {
    return recaptchaVerifier;
  }
  
  recaptchaVerifier = new RecaptchaVerifier(auth, containerId, {
    size: 'invisible',
    callback: () => {
      console.log('reCAPTCHA verified');
    },
    'expired-callback': () => {
      console.log('reCAPTCHA expired');
      // Clear verifier on expiry so it can be recreated
      recaptchaVerifier = null;
    }
  });
  
  return recaptchaVerifier;
};

/**
 * Send OTP to phone number using Firebase
 * @param {string} phoneNumber - Phone number with country code (e.g., +919876543210)
 * @returns {Promise<ConfirmationResult>}
 */
export const sendPhoneOTP = async (phoneNumber) => {
  try {
    const appVerifier = initializeRecaptcha('recaptcha-container');
    
    confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      appVerifier
    );
    
    return confirmationResult;
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw error;
  }
};

/**
 * Verify OTP code
 * @param {string} code - 6-digit OTP code
 * @returns {Promise<UserCredential>}
 */
export const verifyPhoneOTP = async (code) => {
  try {
    if (!confirmationResult) {
      throw new Error('Please send OTP first');
    }
    
    const result = await confirmationResult.confirm(code);
    const firebaseToken = await result.user.getIdToken();
    
    return {
      user: result.user,
      firebaseToken,
      phoneNumber: result.user.phoneNumber
    };
  } catch (error) {
    console.error('Error verifying OTP:', error);
    throw error;
  }
};

/**
 * Get current auth state
 * @returns {auth}
 */
export const getAuthInstance = () => auth;

/**
 * Sign out from Firebase
 * @returns {Promise<void>}
 */
export const firebaseSignOut = async () => {
  try {
    await auth.signOut();
    confirmationResult = null;
    recaptchaVerifier = null; // Clear recaptcha verifier on logout
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

export default {
  initializeRecaptcha,
  sendPhoneOTP,
  verifyPhoneOTP,
  getAuthInstance,
  firebaseSignOut,
};
