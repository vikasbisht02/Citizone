/**
 * @typedef {Object} User
 * @property {string} id - User ID
 * @property {string} email - User email
 * @property {string} fullName - User full name
 * @property {string} [phoneNumber] - User phone number
 * @property {string} [profileImage] - User profile image URL
 * @property {string} [role] - User role (user, admin, etc.)
 * @property {boolean} emailVerified - Is email verified
 * @property {Date} createdAt - Account creation date
 * @property {Date} updatedAt - Last update date
 */

/**
 * @typedef {Object} LoginPayload
 * @property {string} email - User email
 * @property {string} password - User password
 */

/**
 * @typedef {Object} RegisterPayload
 * @property {string} fullName - User full name
 * @property {string} email - User email
 * @property {string} password - User password
 * @property {string} [phoneNumber] - User phone number
 */

/**
 * @typedef {Object} AuthResponse
 * @property {User} user - User data
 * @property {string} token - JWT token
 * @property {Date} expiresAt - Token expiry date
 */

export {};
