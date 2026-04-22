/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  VerifyEmailPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  UserDashboard,
  AdminDashboard,
} from '../pages';
import { ProtectedRoute, PublicRoute, UnrestrictedRoute, RoleBasedRoute } from './ProtectedRoute';
import { initAuthStart, initAuthSuccess, initAuthFailure } from '../redux/slices/authSlice';
import { getCurrentUser } from '../services/authService';
import { LoadingSpinner } from '../components/Common';

/**
 * Initialize Auth Component - Checks if user is still authenticated via cookie
 */
const AuthInitializer = ({ children }) => {
  const dispatch = useDispatch();
  const authInitialized = useSelector(state => state.auth.authInitialized);
  const initRef = useRef(false);

  useEffect(() => {
    // Prevent double initialization in StrictMode (development)
    if (initRef.current) return;
    initRef.current = true;

    const initializeAuth = async () => {
      dispatch(initAuthStart());
      try {
        const response = await getCurrentUser();
        // Response is the user object directly
        dispatch(initAuthSuccess({ user: response.data }));
      } catch (error) {
        // If error, user is not authenticated (cookie is invalid or expired)
        dispatch(initAuthFailure());
      }
    };

    initializeAuth();
  }, [dispatch]);

  // Wait until auth initialization is complete before rendering routes
  if (!authInitialized) {
    return <LoadingSpinner text="Loading..." />;
  }

  return children;
};

/**
 * App Routes Configuration with Role-Based Access
 * @returns {JSX.Element}
 */
const AppRoutes = () => {
  return (
    <Router>
      <AuthInitializer>
        <Routes>
        {/* ==================== PUBLIC ROUTES ==================== */}
        <Route path="/" element={<HomePage />} />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />

        <Route
          path="/verify-email"
          element={
            <UnrestrictedRoute>
              <VerifyEmailPage />
            </UnrestrictedRoute>
          }
        />

        <Route
          path="/forgot-password"
          element={
            <PublicRoute>
              <ForgotPasswordPage />
            </PublicRoute>
          }
        />

        <Route
          path="/reset-password"
          element={
            <UnrestrictedRoute>
              <ResetPasswordPage />
            </UnrestrictedRoute>
          }
        />

        {/* ==================== PROTECTED USER ROUTES ==================== */}
        <Route
          path="/dashboard/user"
          element={
            <ProtectedRoute>
              <RoleBasedRoute allowedRoles={['user', 'admin', 'superadmin']}>
                <UserDashboard />
              </RoleBasedRoute>
            </ProtectedRoute>
          }
        />

        {/* ==================== PROTECTED ADMIN ROUTES ==================== */}
        <Route
          path="/dashboard/admin"
          element={
            <ProtectedRoute>
              <RoleBasedRoute allowedRoles={['admin', 'superadmin']}>
                <AdminDashboard />
              </RoleBasedRoute>
            </ProtectedRoute>
          }
        />

        {/* ==================== LEGACY ROUTE REDIRECTS ==================== */}
        <Route path="/dashboard" element={<Navigate to="/dashboard/user" />} />

        {/* ==================== 404 CATCH ALL ==================== */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </AuthInitializer>
    </Router>
  );
};

export default AppRoutes;
