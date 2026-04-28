# Citizone Backend API

A robust Express.js backend API for the Citizone platform - a citizen complaint and issue management system. This API handles user authentication, complaint management, and admin functionalities.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Database Models](#database-models)
- [Configuration](#configuration)
- [Security Features](#security-features)
- [Error Handling](#error-handling)
- [Contributing](#contributing)

---

## Features

✅ **User Authentication**
- Email-based registration and login
- Mobile number-based authentication with OTP
- JWT token-based session management
- Password reset and forgot password functionality
- Firebase token verification

✅ **Security**
- Bcrypt password hashing
- JWT authentication
- CORS protection
- XSS prevention
- MongoDB injection protection
- Rate limiting
- Helmet security headers
- HTTP Parameter Pollution (HPP) protection

✅ **Email & SMS Services**
- OTP generation and verification
- Welcome emails
- Password reset emails
- SMS notifications via Twilio

✅ **File Management**
- Cloudinary image upload integration
- QR code generation

✅ **Admin Dashboard**
- Multi-user role support (User, Admin, Super Admin)
- Dashboard analytics

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB with Mongoose ODM |
| **Authentication** | JWT (jsonwebtoken) |
| **Password Hashing** | Bcryptjs |
| **Email Service** | Nodemailer |
| **SMS Service** | Twilio |
| **File Upload** | Cloudinary, Multer |
| **Security** | Helmet, Express Rate Limit, XSS Clean, MongoDB Sanitize |
| **2FA** | Speakeasy, Firebase Admin |
| **Logging** | Morgan |

---

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas)
- Git

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/vikasbisht02/citizone.git
cd Citizone-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/citizone
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/citizone

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d

# Email Configuration (Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
EMAIL_FROM=noreply@citizone.com

# SMS Configuration (Twilio)
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=+1234567890

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Firebase Configuration
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY=your_firebase_private_key
FIREBASE_CLIENT_EMAIL=your_firebase_client_email

# Frontend URLs
USER_FRONTEND_URL=http://localhost:5173
ADMIN_FRONTEND_URL=http://localhost:5174
SUPER_ADMIN_FRONTEND_URL=http://localhost:5175
CLIENT_URL=http://localhost:3000
FRONTEND_URL=http://localhost:5173
```

---

## Available Scripts

### Development

```bash
# Start development server with auto-reload (requires nodemon)
npm run dev
```

### Production

```bash
# Start server
npm start
```

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Database Operations

```bash
# Seed database with sample data
npm run seed

# Clean up database
npm run cleanup
```

---

## Project Structure

```
Citizone-backend/
├── src/
│   ├── app.js                    # Express app setup & middleware
│   ├── server.js                 # Server entry point
│   ├── config/                   # Configuration files
│   │   ├── db.js                 # MongoDB connection
│   │   ├── cloudinary.js         # Cloudinary setup
│   │   └── firebaseAdmin.js      # Firebase configuration
│   ├── controllers/              # Business logic
│   │   └── authControllers.js    # Authentication logic
│   ├── models/                   # Mongoose schemas
│   │   └── UserModel.js          # User model
│   ├── routes/                   # API routes
│   │   └── authRoutes.js         # Authentication routes
│   ├── middleware/               # Express middleware
│   │   └── authUserMiddleware.js # JWT verification
│   ├── services/                 # External services
│   │   ├── mailServices/
│   │   │   ├── email.js          # Email sending
│   │   │   ├── emailTemplate.js  # Email templates
│   │   │   └── nodemailerConfig.js
│   │   └── smsServices/
│   │       └── smsServices.js    # SMS via Twilio
│   ├── utils/                    # Utility functions
│   │   ├── dataValidator.js      # Input validation
│   │   ├── helper.js             # Helper functions
│   │   ├── isEmpty.js            # Empty check utilities
│   │   ├── jwt.js                # JWT utilities
│   │   ├── otpGenerator.js       # OTP generation
│   │   └── password.js           # Password utilities
│   └── common/
│       └── images/               # Static images
├── package.json
├── .env                          # Environment variables
├── .gitignore
└── README.md
```

---

## API Endpoints

### Authentication Routes

**Base URL**: `/v1/api/auth`

#### Email-Based Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|----------------|
| POST | `/registerAuth/email` | Register user with email | ❌ No |
| POST | `/loginAuth/email` | Login with email & password | ❌ No |
| POST | `/verificationAuth/forgot-password` | Request password reset | ❌ No |
| POST | `/verificationAuth/reset-password` | Reset password with token | ❌ No |

#### Mobile Number Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|----------------|
| POST | `/mobileAuth/number` | Request OTP on mobile | ❌ No |
| POST | `/verificationAuth/verify-code` | Verify OTP | ❌ No |

#### User Management

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|----------------|
| POST | `/verifiedAuth/logout-user` | Logout user | ✅ JWT Token |
| POST | `/verificationAuth/current-user` | Get current user info | ✅ JWT Token |
| POST | `/firebase/verify` | Verify Firebase token | ❌ No |

---

## Authentication

### JWT Token Flow

1. User registers/logs in
2. Server validates credentials
3. JWT token is generated and set in HTTP-only cookie
4. Client includes token in Authorization header for protected routes
5. Middleware validates token before accessing protected resources

### Protected Routes

Use the `protectUserRoute` middleware to protect routes:

```javascript
import { protectUserRoute } from "../middleware/authUserMiddleware.js";

router.post("/protected-endpoint", protectUserRoute, controllerFunction);
```

### Token Format

```
Authorization: Bearer <JWT_TOKEN>
```

Or via cookie (automatically handled)

---

## Database Models

### User Model

```javascript
{
  _id: ObjectId,
  email: String (unique),
  password: String (hashed),
  mobileNumber: String,
  firstName: String,
  lastName: String,
  profileImage: String,
  role: String (user, admin, superAdmin),
  isEmailVerified: Boolean,
  isMobileVerified: Boolean,
  emailVerificationToken: String,
  emailVerificationExpires: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  createdAt: Date,
  updatedAt: Date
}
```

---

## Configuration

### Database Connection

Configure MongoDB connection in `src/config/db.js`. Supports:
- Local MongoDB
- MongoDB Atlas Cloud

### Email Service

Uses Nodemailer with SMTP. Configure in `.env`:
```
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```

### SMS Service

Uses Twilio for SMS delivery. Configure in `.env`:
```
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE_NUMBER=...
```

### Cloudinary

For image uploads. Configure in `.env`:
```
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

---

## Security Features

🔒 **Implemented Security Measures**:

- **Password Hashing**: Bcryptjs with salt rounds
- **JWT Authentication**: Secure token-based sessions
- **CORS**: Configured for allowed origins
- **Rate Limiting**: Prevents brute-force attacks
- **Helmet**: Sets various HTTP headers
- **XSS Protection**: XSS-clean middleware
- **MongoDB Injection**: Express-mongo-sanitize
- **HPP**: HTTP Parameter Pollution protection
- **Environment Variables**: Sensitive data in `.env`
- **HTTP-Only Cookies**: Secure token storage

---

## Error Handling

The API implements standardized error responses:

```javascript
{
  success: false,
  message: "Error description",
  statusCode: 400
}
```

Common HTTP Status Codes:
- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Server Error

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License. See LICENSE file for details.

---

## Support

For issues and questions:
- Open an issue on GitHub
- Contact: support@citizone.com

---

## Author

**Vikas Singh Bisht**

---

**Last Updated**: April 2026
