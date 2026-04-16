import React from 'react';
import Card from '../Common/Card';

/**
 * Auth Layout Component
 * Used for authentication pages (Login, Register, ForgotPassword, ResetPassword)
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 * @param {string} props.title - Page title
 * @param {string} props.subtitle - Page subtitle
 * @returns {JSX.Element}
 */
const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Citizone</h1>
          {title && (
            <h2 className="mt-2 text-2xl font-bold text-gray-900">{title}</h2>
          )}
          {subtitle && (
            <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
          )}
        </div>

        {/* Content Card */}
        <Card className="p-8">
          {children}
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-gray-600">
          <p>© 2024 Citizone. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
