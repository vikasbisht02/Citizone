import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

/**
 * App Routes Configuration with Role-Based Access
 * @returns {JSX.Element}
 */
const AppRoutes = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default AppRoutes;
