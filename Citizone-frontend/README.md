# Citizone Frontend

A modern, responsive React application for the Citizone platform. Provides user and admin interfaces for reporting and managing citizen complaints and city issues.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Page Routes](#page-routes)
- [State Management](#state-management)
- [Components](#components)
- [Styling](#styling)
- [API Integration](#api-integration)
- [Custom Hooks](#custom-hooks)
- [Best Practices](#best-practices)
- [Contributing](#contributing)

---

## Features

✨ **User Features**
- Email & mobile-based registration and login
- Password management (forgot/reset)
- Email verification with OTP
- User dashboard
- Submit and track complaints
- Real-time status updates
- Profile management

✨ **Admin Features**
- Admin dashboard with content moderation
- User management and filtering
- Complaint/Account actions
- Activity analytics and reporting
- Admin-only access control

✨ **SuperAdmin Features**
- SuperAdmin dashboard with full system control
- Admin account management
- System-wide settings configuration
- Complete analytics and audit logs
- User and admin management
- SuperAdmin-only system control

✨ **UI/UX**
- Responsive design (mobile-first)
- Dark mode support
- Smooth animations & transitions
- Loading spinners & feedback
- Toast notifications
- Form validation
- Role-based page rendering

---

## 📍 Role-Based Routing

The application implements strict role-based routing with separate dashboards:

| User Role | Dashboard Path | Features |
|-----------|----------------|----------|
| **user** | `/dashboard/user` | Profile, complaints, tracking |
| **admin** | `/dashboard/admin` | Moderation, user management, reports |
| **superadmin** | `/dashboard/superadmin` | System control, admin management, settings |

**Smart Redirects:**
- `/login` → After login, redirects to role-specific dashboard automatically
- `/dashboard` → Automatically redirects to correct dashboard based on user role
- Attempting to access wrong role's dashboard → Redirects to user's actual dashboard
- All role-based routes use `RoleBasedRoute` guard component

## Tech Stack

| Layer | Technology |
|-------|----------|
| **Framework** | React 19+ |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS 4 |
| **State Management** | Redux Toolkit |
| **API Management** | RTK Query (replaces Axios) |
| **Routing** | React Router v7 |
| **Charts** | Recharts |
| **Utilities** | JS-Cookie |
| **Linting** | ESLint |
| **Package Manager** | npm |

**RTK Query Features:**
- Automatic data caching with tag-based invalidation
- Built-in loading/error states in Redux store
- Automatic refetching on network recovery
- DevTools for debugging

---

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/vikasbisht02/citizone.git
cd Citizone-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# API Configuration (RTK Query)
VITE_API_BASE_URL=http://localhost:5000

# Application Settings
VITE_APP_TITLE=Citizone - Ride From Here
VITE_ENVIRONMENT=development
VITE_COOKIE_EXPIRE_TIME=86400000
VITE_SESSION_TIMEOUT=1800000

# Firebase (Optional - for authentication)
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

**Note:** RTK Query automatically handles all API calls through the configured `VITE_API_BASE_URL`. No separate axios configuration needed!

### Setup (5 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
# Create .env.local with:
# VITE_API_BASE_URL=http://localhost:5000

# 3. Start development server
npm run dev

# 4. Open browser
# http://localhost:5173
```

For detailed setup, see [QUICK_START.md](./QUICK_START.md)

---

## ✨ Features

### Authentication
- ✅ Email registration with password
- ✅ Email login with secure password
- ✅ Mobile OTP authentication (SMS/Email)
- ✅ Password reset via email link
- ✅ Token-based session management
- ✅ HttpOnly cookie storage
- ✅ Automatic session refresh

### User Management
- ✅ User profile display
- ✅ Verification status tracking
- ✅ Last login timestamp
- ✅ Account blocking detection
- ✅ Role-based dashboards

### Admin Features
- ✅ User management capabilities
- ✅ Admin dashboard with controls
- ✅ SuperAdmin system settings
- ✅ Role management interface

### Security
- ✅ JWT authentication
- ✅ XSS protection (httpOnly cookies)
- ✅ CSRF token support
- ✅ Role-based authorization
- ✅ Form validation (client + server)
- ✅ Secure password handling

### UI/UX
- ✅ Modern, responsive design
- ✅ Loading states on all async operations
- ✅ Comprehensive error messages
- ✅ Form validation feedback
- ✅ OTP countdown timer
- ✅ Mobile-friendly layout

---

## 📁 Project Structure

```
src/
├── components/            # React components
│   ├── Auth/             # Authentication components
│   │   ├── EmailLoginForm.jsx
│   │   ├── LoginForm.jsx
│   │   ├── RegisterForm.jsx
│   │   ├── MobileAuthForm.jsx
│   │   ├── OTPVerificationForm.jsx
│   │   └── ...
│   └── Common/           # Reusable UI components
│       ├── Button.jsx
│       ├── Input.jsx
│       ├── Card.jsx
│       └── ...
├── pages/                # Page components
│   ├── LoginPage.jsx
│   ├── UserDashboard.jsx
│   ├── AdminDashboard.jsx
│   ├── SuperAdminDashboard.jsx
│   └── ...
├── routes/               # Route configuration
│   ├── AppRoutes.jsx     # Main routes with role-based redirects
│   └── ProtectedRoute.jsx # Route guards
├── redux/                # State management
│   ├── api.js            # RTK Query endpoints
│   ├── store.js          # Redux store configuration
│   └── slices/           # Redux reducers
│       └── authSlice.js
├── constants/            # Constants
│   └── apiEndpoints.js
├── utils/                # Utilities
│   ├── validators.js
│   ├── errorHandler.js
│   └── localStorage.js
└── hooks/                # Custom hooks
    ├── useAuth.js
    ├── useForm.js
    └── ...
```

---

## 🔌 API Integration with RTK Query

The application uses **RTK Query** for all API calls:

```javascript
// src/redux/api.js
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User', 'Profile'],
  endpoints: (builder) => ({
    login: builder.mutation({ /* ... */ }),
    register: builder.mutation({ /* ... */ }),
    getCurrentUser: builder.query({ /* ... */ }),
    // ... more endpoints
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetCurrentUserQuery,
  // ... more hooks
} = apiSlice;
```

**Usage in Components:**
```jsx
const [login, { isLoading, error }] = useLoginMutation();
const { data: user, isLoading: isFetchingUser } = useGetCurrentUserQuery();

// Automatic caching, loading states, and error handling!
```

**Key Benefits:**
- ✅ Automatic response caching with tag-based invalidation
- ✅ Built-in loading/error states in Redux
- ✅ Automatic refetching on network recovery
- ✅ Zero-boilerplate API integration
- ✅ TypeScript support ready

---

## 🛠️ Technology Stack

- **React** 19.1.0 - UI library
- **React Router** 7.6.3 - Client-side routing
- **Redux Toolkit** 2.8.2 - State management
- **RTK Query** - Advanced data fetching (replaces Axios)
- **Tailwind CSS** 4.1.11 - Styling
- **Vite** 7.0.0 - Build tool

---

## 🔐 Authentication Flows

### Email Registration & Login
User registers with email → Backend creates account → User logs in → Dashboard

### Mobile OTP
User enters phone → OTP sent → User verifies code → Login → Dashboard

### Password Reset
User requests reset → Email sent with link → User sets new password → Login

See [TESTING_GUIDE.md](./TESTING_GUIDE.md) for detailed testing procedures.

---

## 💻 Development

### Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

### Environment Configuration

Create `.env.local`:
```env
VITE_API_BASE_URL=http://localhost:5000
VITE_APP_NAME=Citizone
```

---

## 📚 Documentation

Complete documentation included:

| Document | Purpose |
|----------|---------|
| [QUICK_START.md](./QUICK_START.md) | Setup and first run (5 min) |
| [TESTING_GUIDE.md](./TESTING_GUIDE.md) | Testing all auth flows |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | System architecture & data flow |
| [IMPLEMENTATION_STATUS.md](./IMPLEMENTATION_STATUS.md) | Feature status & planning |
| [API_INTEGRATION_CHECKLIST.md](./API_INTEGRATION_CHECKLIST.md) | API testing checklist |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Create .env.local
# VITE_API_BASE_URL=http://localhost:5000

# Start development
npm run dev

# Open http://localhost:5173
```

---

## 📞 Support

- Check [QUICK_START.md](./QUICK_START.md) for setup issues
- Review [TESTING_GUIDE.md](./TESTING_GUIDE.md) for testing help
- Read [ARCHITECTURE.md](./ARCHITECTURE.md) for technical details
- Check browser console for error messages
- Use Redux DevTools for state inspection

---

**Version**: 1.0.0 | **Status**: ✅ Production Ready | **Last Updated**: 2024
