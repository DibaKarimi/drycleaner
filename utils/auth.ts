import { hash, compare } from "bcryptjs";

async function hashPassword(password: any) {
  const hashPassword = await hash(password, 12);
  return hashPassword;
}

async function verifyPassword(password: any, hashPassword: any) {
  const isValid = await compare(password, hashPassword);
  return isValid;
}

export { hashPassword, verifyPassword };
