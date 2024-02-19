import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";

const authOptins = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (error) {
          throw new Error("Error in connecting to DB");
        }

        if (!email || !password) {
          throw new Error("Invalid Data");
        }

        const user = await User.findOne({ email: email });
        if (!user) throw new Error("user not exist");

        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("Username or password is incorrect");

        return { email };
      },
    }),
  ],
  secret: "58d7e669e3d124839583265911e3e3fd47c61ead",
};

export default NextAuth(authOptins);
