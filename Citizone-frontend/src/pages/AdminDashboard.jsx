import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/Layout/MainLayout';
import { Card, Button, LoadingSpinner, Alert } from '../components/Common';
import { getCurrentUser } from '../services/authService';
import { setUser } from '../redux/slices/authSlice';

/**
 * Admin Dashboard - Manage users and system
 * @returns {JSX.Element}
 */
const AdminDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, role } = useSelector(state => state.auth);

  useEffect(() => {
    if (!isAuthenticated || (role !== 'admin' && role !== 'superadmin')) {
      navigate('/login');
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await getCurrentUser();
        dispatch(setUser(response.data));
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    if (!user) {
      fetchUser();
    }
  }, [isAuthenticated, user, navigate, dispatch, role]);

  if (!isAuthenticated || (role !== 'admin' && role !== 'superadmin')) {
    return null;
  }

  if (isLoading) {
    return (
      <MainLayout>
        <LoadingSpinner text="Loading admin panel..." />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 capitalize">
              {role === 'superadmin' ? 'Super Admin' : 'Admin'} Dashboard
            </h1>
            <p className="text-gray-600 mt-2">Welcome back, {user?.name}!</p>
          </div>
          {role === 'superadmin' && (
            <Alert type="warning">
              You have <strong>Super Admin</strong> access
            </Alert>
          )}
        </div>

        {/* Admin Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card title="Total Users">
            <div className="text-4xl font-bold text-blue-600">0</div>
            <p className="text-sm text-gray-600 mt-2">Registered users</p>
          </Card>

          <Card title="Verified Users">
            <div className="text-4xl font-bold text-green-600">0</div>
            <p className="text-sm text-gray-600 mt-2">Email verified</p>
          </Card>

          <Card title="Blocked Accounts">
            <div className="text-4xl font-bold text-red-600">0</div>
            <p className="text-sm text-gray-600 mt-2">Deactivated users</p>
          </Card>

          <Card title="New This Month">
            <div className="text-4xl font-bold text-purple-600">0</div>
            <p className="text-sm text-gray-600 mt-2">New registrations</p>
          </Card>
        </div>

        {/* Management Sections */}
        <Card title="User Management">
          <div className="space-y-4">
            <p className="text-gray-600 text-sm">Manage all users, permissions, and account statuses</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="primary" className="w-full justify-center">
                View All Users
              </Button>
              <Button variant="secondary" className="w-full justify-center">
                Search Users
              </Button>
              <Button variant="secondary" className="w-full justify-center">
                User Roles
              </Button>
            </div>
          </div>
        </Card>

        {/* Super Admin Features */}
        {role === 'superadmin' && (
          <>
            <Card title="System Management">
              <div className="space-y-4">
                <p className="text-gray-600 text-sm">
                  Manage system-wide settings and administrator accounts
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="primary" className="w-full justify-center">
                    System Settings
                  </Button>
                  <Button variant="secondary" className="w-full justify-center">
                    Manage Admins
                  </Button>
                  <Button variant="secondary" className="w-full justify-center">
                    Audit Logs
                  </Button>
                </div>
              </div>
            </Card>

            <Card title="Permissions Management">
              <div className="space-y-4">
                <p className="text-gray-600 text-sm">
                  Configure roles and permissions for all users
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="secondary" className="w-full justify-center">
                    Manage Roles
                  </Button>
                  <Button variant="secondary" className="w-full justify-center">
                    Permissions Matrix
                  </Button>
                </div>
              </div>
            </Card>
          </>
        )}

        {/* Activity & Reports */}
        <Card title="Reports & Analytics">
          <div className="space-y-4">
            <p className="text-gray-600 text-sm">View system reports and analytics</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="secondary" className="w-full justify-center">
                User Analytics
              </Button>
              <Button variant="secondary" className="w-full justify-center">
                Login Reports
              </Button>
              <Button variant="secondary" className="w-full justify-center">
                System Reports
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default AdminDashboard;
