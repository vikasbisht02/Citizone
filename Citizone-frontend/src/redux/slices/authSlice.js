import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
  role: null, // 'user', 'admin', 'superadmin'
  otpSent: false,
  otpEmail: null,
  otpMobile: null,
  isUserVerified: false,
  authInitialized: false, // Track if auth check has been done
  sessionExpiry: null, // Track when the current session expires
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // ============== EMAIL REGISTRATION ==============
    registerStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    registerSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.otpEmail = action.payload.email;
      state.otpSent = true;
    },

    registerFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ============== EMAIL LOGIN ==============
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.role = action.payload.role || action.payload.user?.role;
      state.isAuthenticated = true;
      state.error = null;
      state.isUserVerified = action.payload.user?.isUserVerified || false;
    },

    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },

    // ============== MOBILE AUTH ==============
    mobileAuthStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    mobileAuthSent: (state, action) => {
      state.isLoading = false;
      state.otpMobile = action.payload.mobileNumber;
      state.otpSent = true;
      state.error = null;
    },

    mobileAuthFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ============== OTP VERIFICATION ==============
    verifyOTPStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    verifyOTPSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.role = action.payload.role || action.payload.user?.role;
      state.isAuthenticated = true;
      state.isUserVerified = true;
      state.error = null;
      state.otpSent = false;
      state.otpEmail = null;
      state.otpMobile = null;
    },

    verifyOTPFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ============== PASSWORD RESET ==============
    forgotPasswordStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    forgotPasswordSuccess: (state) => {
      state.isLoading = false;
      state.error = null;
    },

    forgotPasswordFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    resetPasswordStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    resetPasswordSuccess: (state) => {
      state.isLoading = false;
      state.error = null;
    },

    resetPasswordFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ============== LOGOUT ==============
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.role = null;
      state.error = null;
      state.otpSent = false;
      state.otpEmail = null;
      state.otpMobile = null;
      state.isUserVerified = false;
    },

    // ============== SET USER ==============
    setUser: (state, action) => {
      state.user = action.payload;
      state.role = action.payload?.role;
      state.isUserVerified = action.payload?.isUserVerified;
    },

    // ============== CLEAR ERROR ==============
    clearError: (state) => {
      state.error = null;
    },

    // ============== CLEAR OTP ==============
    clearOTP: (state) => {
      state.otpSent = false;
      state.otpEmail = null;
      state.otpMobile = null;
    },

    // ============== INITIALIZE AUTH (Check cookie on app load) ==============
    initAuthStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    initAuthSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.role = action.payload.user?.role;
      state.isAuthenticated = true;
      state.isUserVerified = action.payload.user?.isUserVerified || false;
      state.error = null;
      state.authInitialized = true;
    },

    initAuthFailure: (state) => {
      state.isLoading = false;
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.role = null;
      state.error = null;
      state.authInitialized = true;
    },

    // ============== REFRESH TOKEN ==============
    refreshToken: (state, action) => {
      state.token = action.payload.token;
      state.sessionExpiry = action.payload.expiresAt || action.payload.expiresIn ? new Date().getTime() + (action.payload.expiresIn * 1000) : null;
    },
  },
});

export const {
  registerStart,
  registerSuccess,
  registerFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  mobileAuthStart,
  mobileAuthSent,
  mobileAuthFailure,
  verifyOTPStart,
  verifyOTPSuccess,
  verifyOTPFailure,
  forgotPasswordStart,
  forgotPasswordSuccess,
  forgotPasswordFailure,
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFailure,
  logout,
  setUser,
  clearError,
  clearOTP,
  initAuthStart,
  initAuthSuccess,
  initAuthFailure,
  refreshToken,
} = authSlice.actions;

export default authSlice.reducer;
