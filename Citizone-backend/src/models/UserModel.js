import mongoose from "mongoose";
import { type } from "os";

const roles = ["user", "admin", "superadmin"];

const userSchema = new mongoose.Schema(
  {
    name: String,

    email: {
      type: String,
    },

    mobileNumber: {
      type: String,
      trim: true,
      default: null,
    },


    password: String,

    age: Number,
    gender: String,

    isUserVerified: {
      type: Boolean,
      default: false,
    },
    verificationCode: String,
    verificationCodeExpireAt: Date,

    role: {
      type: String,
      default: "user",
    },

    registeredAt: {
      type: Date,
      default: Date.now
    },

    lastLogin: Date,

    isBlocked: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
