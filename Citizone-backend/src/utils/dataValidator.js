import bcrypt from "bcryptjs";

export const emailValidator = (email) => {
  if (!email) return false;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export const isValidNumber = async (number) => {
  if (!number) return false;
  return !/^\d{10}$/.test(number)
}
