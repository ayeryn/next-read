import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import * as dotenv from 'dotenv';
import { connectToDB } from "@/utils/database";

dotenv.config();

console.log({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  // async session({session}){

  // }

  async signIn({profile}){
    try {
      await connectToDB();

      // Check if a user already exists

      // If not, create new user and save to DB
      return true;
    } catch (error) {
      console.log(error)
      return false;
    }
  }
})

export {handler as GetAnimationsOptions, handler as POST}