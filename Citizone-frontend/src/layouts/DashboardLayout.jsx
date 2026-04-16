import React from 'react';
import { Header, Footer } from '../components/Common';

/**
 * Dashboard Layout Component - with sidebar
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Layout content
 * @param {React.ReactNode} props.sidebar - Sidebar content
 * @returns {JSX.Element}
 */
const DashboardLayout = ({ children, sidebar }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        {sidebar && (
          <aside className="w-64 bg-gray-100 border-r border-gray-200">
            {sidebar}
          </aside>
        )}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
