# Citizone 🏙️

A comprehensive full-stack platform that empowers citizens to report problems, raise complaints, and seek help in their city or community. Management can view, track, and efficiently resolve reported issues.

[![GitHub](https://img.shields.io/badge/GitHub-Citizone-blue?logo=github)](https://github.com/vikasbisht02/citizone)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-v16+-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19+-blue)](https://react.dev/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Architecture](#project-architecture)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick Start Guide](#quick-start-guide)
- [Directory Structure](#directory-structure)
- [Key Features Explained](#key-features-explained)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## 🎯 Overview

**Citizone** is a modern, responsive platform designed for communities, cities, and organizations to streamline citizen feedback and complaint management. It bridges the gap between citizens and management through a transparent, efficient system.

### Problem It Solves
- Citizens struggle to report city problems effectively
- Complaints get lost or forgotten
- No transparent tracking of issue resolution
- Limited communication between citizens and authorities

### Solution
Citizone provides:
- ✅ Easy complaint submission through web and mobile
- ✅ Real-time status tracking
- ✅ Direct communication channel
- ✅ Analytics and reporting for management
- ✅ Multi-user role support

---

## ✨ Core Features

### 👥 For Citizens/Users

- 📝 **Easy Registration** - Email or mobile-based sign-up
- 🔐 **Secure Authentication** - JWT-based sessions with 2FA support
- 📸 **File Uploads** - Attach images/documents to complaints
- 📍 **Location Tagging** - Mark issues on interactive maps
- ⏱️ **Track Status** - Real-time updates on complaint progress
- 🔔 **Notifications** - Email & SMS alerts on status changes
- 👤 **Profile Management** - Update personal information
- 📊 **User Dashboard** - Personal complaint tracking

### 👨‍💼 For Administrators

- 📊 **Admin Dashboard** - Content moderation and user management
- 📋 **Complaint Management** - View, filter, and manage complaints
- 🏷️ **Status Updates** - Assign and update complaint status
- 📁 **Advanced Filtering** - Filter & search with multiple criteria
- 📈 **Analytics** - Performance metrics and reports
- 👥 **User Management** - Multi-level access control

### 🔐 For Super Administrators

- 🎛️ **System Control** - Full platform management
- 👨‍💻 **Admin Management** - Create and manage admin accounts
- ⚙️ **System Settings** - Configure platform-wide settings
- 📊 **Audit Logs** - Complete system activity tracking
- 🛡️ **Security Management** - User permissions and access control
- 📈 **System Analytics** - Comprehensive reporting

### 🏗️ Advanced Architecture

- ✅ **RTK Query** - Advanced data fetching with automatic caching
  - Tag-based cache invalidation
  - Built-in loading/error states
  - Automatic refetching
  - Zero-boilerplate API integration
- ✅ **Role-Based Routing** - Separate dashboards per role
  - User → `/dashboard/user`
  - Admin → `/dashboard/admin`
  - SuperAdmin → `/dashboard/superadmin`
  - Smart redirects based on user role
- ✅ **Protected Routes** - Access control at component level
- ✅ **Redux Toolkit** - Unified state management

### 🔒 Security & Reliability

- 🛡️ **End-to-End Encryption** - Secure data transmission
- 🔐 **Password Hashing** - Bcrypt for secure passwords
- ⚠️ **Rate Limiting** - Prevent abuse and attacks
- 🧹 **Input Validation** - XSS and injection protection
- 📱 **Mobile Responsive** - Works on all devices
- ☁️ **Cloud Deployment Ready** - Scalable architecture

---

## 🏗️ Project Architecture

```
Frontend (React + Vite + Redux Toolkit + RTK Query)
         ↕
   (RTK Query/Mutations + Automatic Caching)
         ↕
Backend API (Express.js + Node.js)
         ↕
   (Mongoose ODM + MongoDB)
         ↕
Database (MongoDB)

External Integrations:
📧 Email (Nodemailer) | 📱 SMS (Twilio)
☁️ Files (Cloudinary) | 🔥 Auth (Firebase)
```

---

## 🛠️ Tech Stack

### Frontend
| Component | Technology |
|-----------|-----------|
| **UI Framework** | React 19 |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS 4 |
| **State Management** | Redux Toolkit |
| **API Management** | RTK Query (replaces Axios) |
| **Routing** | React Router v7 |
| **Charts** | Recharts |
| **Linting** | ESLint |

**API Integration Details:**
- ✅ RTK Query for efficient data fetching with caching
- ✅ Automatic cache invalidation with tags
- ✅ Built-in loading/error states
- ✅ Automatic refetching on network recovery

### Backend
| Component | Technology |
|-----------|-----------|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB + Mongoose |
| **Authentication** | JWT + Bcrypt |
| **Validation** | Express Validator |
| **Security** | Helmet, CORS, Rate Limit |
| **Email** | Nodemailer |
| **SMS** | Twilio |
| **File Upload** | Cloudinary + Multer |

### DevOps & Deployment
- Git & GitHub
- MongoDB Atlas (Cloud)
- Firebase (Authentication & Cloud Functions)
- Cloudinary (CDN)

---

## 📦 Prerequisites

### System Requirements
- **Node.js** v16 or higher
- **npm** or **yarn**
- **Git**
- **MongoDB** (local or MongoDB Atlas cloud)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Required Accounts
- MongoDB Atlas account (for database)
- Cloudinary account (for image uploads)
- Firebase project (for authentication)
- Twilio account (for SMS)
- Email service (Gmail/SendGrid for emails)

---

## 🚀 Quick Start Guide

### Step 1: Clone Repository

```bash
git clone https://github.com/vikasbisht02/citizone.git
cd citizone
```

### Step 2: Backend Setup

```bash
cd Citizone-backend

# Install dependencies
npm install

# Create .env file with your configuration
# (See Citizone-backend/README.md for detailed env setup)
cat > .env << EOF
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/citizone
JWT_SECRET=your_secret_key
# ... add other env variables
EOF

# Start development server
npm run dev
```

Backend will run on `http://localhost:5000`

### Step 3: Frontend Setup

```bash
cd ../Citizone-frontend

# Install dependencies
npm install

# Create .env.local file
# (See Citizone-frontend/README.md for detailed env setup)
cat > .env.local << EOF
VITE_API_BASE_URL=http://localhost:5000/v1/api
# ... add firebase and other env variables
EOF

# Start development server
npm run dev
```

Frontend will run on `http://localhost:5173`

### Step 4: Access Application

| Role | URL | Credentials |
|------|-----|-------------|
| **User** | http://localhost:5173 | Use signup |
| **Admin** | http://localhost:5173/admin | Admin login |

---

## 📁 Directory Structure

```
citizone/
│
├── 📄 README.md                          # This file
├── 📄 LICENSE                            # MIT License
├── .gitignore
│
├── Citizone-backend/                     # Express.js API Server
│   ├── src/
│   │   ├── config/                       # Configuration files
│   │   ├── controllers/                  # Business logic
│   │   ├── models/                       # MongoDB schemas
│   │   ├── routes/                       # API routes
│   │   ├── middleware/                   # Express middleware
│   │   ├── services/                     # Email, SMS, etc.
│   │   ├── utils/                        # Helper functions
│   │   ├── app.js                        # Express app
│   │   └── server.js                     # Entry point
│   ├── package.json
│   ├── .env                              # Environment variables
│   ├── .gitignore
│   └── README.md                         # Backend documentation
│
└── Citizone-frontend/                    # React + Vite Application
    ├── src/
    │   ├── components/                   # Reusable components
    │   ├── pages/                        # Page components
    │   ├── routes/                       # Routing setup
    │   ├── redux/                        # State management
    │   ├── services/                     # API services
    │   ├── utils/                        # Utilities
    │   ├── hooks/                        # Custom hooks
    │   ├── constants/                    # App constants
    │   ├── App.jsx                       # Main component
    │   └── main.jsx                      # Entry point
    ├── public/                           # Static assets
    ├── package.json
    ├── vite.config.js                    # Vite configuration
    ├── tailwind.config.js                # Tailwind config
    ├── eslint.config.js                  # ESLint config
    ├── .env.local                        # Environment variables
    ├── index.html
    └── README.md                         # Frontend documentation
```

---

## 🎓 Key Features Explained

### Authentication Flow
1. User registers with email/mobile
2. OTP sent for verification
3. JWT token issued on successful login
4. Token stored in secure HTTP-only cookie
5. Protected routes validate token

### Complaint Lifecycle
1. **Submit** - User submits complaint with details/images
2. **Verify** - Admin verifies complaint validity
3. **Assign** - Assigned to relevant department
4. **In Progress** - Issue being worked on
5. **Resolved** - Issue resolved, notification sent
6. **Closed** - Complaint closed after verification

### Role-Based Access Control
- **User** - Can submit and track own complaints
- **Admin** - Can manage complaints in assigned area
- **Super Admin** - Full system access

---

## 🛡️ Security Measures

- ✅ HTTPS/TLS encryption
- ✅ JWT-based authentication
- ✅ Bcryptjs password hashing
- ✅ CORS protection
- ✅ Rate limiting
- ✅ Input validation & sanitization
- ✅ XSS prevention
- ✅ SQL/MongoDB injection protection
- ✅ CSRF tokens
- ✅ Environment variable protection
- ✅ Secure cookie handling

---

## 📊 API Documentation

Detailed API documentation available in:
- Backend README: [Citizone-backend/README.md](Citizone-backend/README.md#api-endpoints)
- Postman Collection: `./api-docs/citizone.postman_collection.json`

### Example API Call

```bash
# Register user
curl -X POST http://localhost:5000/v1/api/auth/registerAuth/email \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "SecurePass123!",
    "confirmPassword": "SecurePass123!"
  }'

# Response
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "...",
    "email": "user@example.com"
  }
}
```

---

## 🧪 Testing

### Backend Tests
```bash
cd Citizone-backend
npm run test                 # Run all tests
npm run test:watch         # Watch mode
```

### Frontend Tests
```bash
cd Citizone-frontend
npm run test               # Run tests (if configured)
```

---

## 🚢 Deployment

### Backend Deployment (Heroku/Railway)
```bash
cd Citizone-backend
# Configure environment variables on hosting platform
# Deploy using Git
git push heroku main
```

### Frontend Deployment (Vercel/Netlify)
```bash
cd Citizone-frontend
npm run build
# Deploy dist folder to Vercel/Netlify
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request

### Development Guidelines
- Follow existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 📝 License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

---

## 🆘 Troubleshooting

### Common Issues

**Backend won't start**
```bash
# Check if port 5000 is in use
netstat -tuln | grep 5000

# Check MongoDB connection
# Verify MONGODB_URI in .env
```

**Frontend build fails**
```bash
# Clear node_modules
rm -rf node_modules package-lock.json
npm install
npm run build
```

**API requests failing**
```bash
# Check CORS configuration in backend
# Verify API_BASE_URL in frontend .env
# Check backend server is running
```

For more troubleshooting, see:
- [Backend Troubleshooting](Citizone-backend/README.md#troubleshooting)
- [Frontend Troubleshooting](Citizone-frontend/README.md#troubleshooting)

---

## 📧 Contact & Support

- 📧 **Email**: support@citizone.com
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/vikasbisht02/citizone/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/vikasbisht02/citizone/discussions)
- 📖 **Documentation**: [Full Docs](./docs)

---

## 👨‍💻 Authors

**Vikas Singh Bisht**
- GitHub: [@vikassinghbisht](https://github.com/vikassinghbisht)
- Email: vikas@citizone.com

---

## 🎉 Acknowledgments

- React community
- Express.js team
- MongoDB documentation
- All contributors and testers

---

## 📈 Roadmap

- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] AI-powered complaint categorization
- [ ] Geolocation mapping
- [ ] Video complaint submission
- [ ] Multi-language support
- [ ] Blockchain-based verification
- [ ] Public API

---

## 📊 Project Stats

- **Total Lines of Code**: ~5000+
- **Components**: 30+
- **API Endpoints**: 15+
- **Test Coverage**: Growing
- **Contributors**: Open for contributions

---

**Last Updated**: April 27, 2026

**Version**: 1.0.0

---

<div align="center">

**Built with ❤️ for communities**

[⭐ Star this project if you find it helpful!](https://github.com/vikasbisht02/citizone)

</div>

