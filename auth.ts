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
      console.log("account: ", account);
      console.log("user: ", user);
      if (account?.provider === "google") {
        try {
          /**
           * user:  {
           *  id: 'xxxxx',
           *  name: 'Eryn Li',
           *  email: 'xxxx@gmail.com',
           *  image: 'https://lh3.googleusercontent.com/a/xxxx'
           * }
           */
          const { email, name, image, id } = user;

          await connectToDb();
          const existingUser = await User.findOne({ email });
          console.log("user...", existingUser);
          if (!existingUser) {
            console.log("Need to create user for ", email);
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
