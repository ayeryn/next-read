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
      /**
       * user:  {
       *  id: 'xxxxx',
       *  name: 'Eryn Li',
       *  email: 'xxxx@gmail.com',
       *  image: 'https://lh3.googleusercontent.com/a/xxxx'
       * }
       */
      if (account?.provider === "google" || account?.provider === "github") {
        try {
          const { email, name, image, id } = user;

          await connectToDb();
          const existingUser = await User.findOne({ email });
          if (!existingUser) {
            await User.create({
              email: email,
              username: name?.replace(" ", "").toLowerCase(),
              image: image,
              authProviderId: id,
            });
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
