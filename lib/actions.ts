"use server";

import { List } from "@/models/list";
import { User } from "@/models/user";
import connectToDb from "./db";

export async function getDefaultList(userEmail: string) {
  await connectToDb();
  const user = await User.findOne({ email: userEmail });
  const list = await List.findOne({ creator: user._id });
  return list;
}
