import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

/**
 * Main Layout Component
 * Used for general pages (Home, Dashboard, etc.)
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 * @returns {JSX.Element}
 */
const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
