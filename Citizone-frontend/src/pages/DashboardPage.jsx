import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Card, LoadingSpinner } from '../components/Common';
import { useCurrentUser } from '../../hooks';

/**
 * Dashboard Page
 * @returns {JSX.Element}
 */
const DashboardPage = () => {
  const user = useCurrentUser();

  if (!user) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center py-12">
          <LoadingSpinner text="Loading your dashboard..." />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome, {user.fullName}!
          </h1>
          <p className="text-gray-600">Here's your dashboard overview</p>
        </div>

        {/* User Info Card */}
        <Card title="Profile Information">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Full Name</p>
                <p className="text-lg font-semibold text-gray-900">{user.fullName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="text-lg font-semibold text-gray-900">{user.email}</p>
              </div>
            </div>
            {user.phoneNumber && (
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="text-lg font-semibold text-gray-900">{user.phoneNumber}</p>
              </div>
            )}
          </div>
        </Card>

        {/* Activity Section */}
        <Card title="Quick Stats">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">0</p>
              <p className="text-sm text-gray-600 mt-2">Total Documents</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">0</p>
              <p className="text-sm text-gray-600 mt-2">Verified Services</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">0</p>
              <p className="text-sm text-gray-600 mt-2">Requests</p>
            </div>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
