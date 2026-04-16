import React from 'react';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';

/**
 * Auth Layout Component - without sidebar, centered content
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Layout content
 * @param {string} props.title - Page title
 * @returns {JSX.Element}
 */
const AuthLayout = ({ children, title }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          {title && (
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            </div>
          )}
          <div className="bg-white rounded-lg shadow-md p-8">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
