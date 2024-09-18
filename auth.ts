import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import connectToDb from "./lib/db";
import { User } from "./models/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
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

    // async jwt({ token, user }) {
    //   if (user) {
    //     token.role = user.role;
    //   }
    //   return token;
    // },

    signIn: async ({ user, account }) => {
      if (account?.provider === "google") {
        try {
          const { email, name, image, id } = user;
          await connectToDb();
          const existingUser = await User.findOne({ email });
          if (!existingUser) {
            await User.create({ email, name, image, authProviderId: id });
          } else {
            return true;
          }
        } catch (error) {
          throw new Error("Error while creating user");
        }
      }
      return false;
    },
  },
});
