import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import connectToDb from "./lib/db";
import { User } from "./models/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Github],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async session({ session, token }) {
      if (token?.sub && token?.role) {
        session.user.id = token.sub;
      }
      return session;
    },

    signIn: async ({ user, account }) => {
      if (account?.provider === "google") {
        try {
          const { email, name, image, id } = user;
          await connectToDb();
          const existingUser = await User.findOne({ email });
          if (!existingUser) {
            await User.create({ email, name, image, authProviderId: id });
          }
          return true;
        } catch (error) {
          throw new Error("Error while creating user");
        }
      }
      return false;
    },
  },
});
