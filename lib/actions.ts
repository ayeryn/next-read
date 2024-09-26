"use server";

import { redirect } from "next/navigation";
import { getSession } from "./getSession";
import { revalidatePath } from "next/cache";
import { List } from "@/models/list";
import { z } from "zod";

// Validate required data and specify error messages
const FormSchema = z.object({
  id: z.string(),
  name: z.string({
    invalid_type_error: "Please enter a name for the list.",
  }),
  description: z.string(),
  creator: z.string(),
});

const CreateList = FormSchema.omit({ id: true, creator: true });

export async function createList(formData: FormData) {
  const session = await getSession();
  const user = session?.user;
  if (!user) redirect("/");
  console.log("Session - ", session);
  console.log("User - ", user);

  const validatedFields = CreateList.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing required field. Failed to create list.",
    };
  }

  const { name, description } = validatedFields.data;
  try {
    console.log("Creating list... - ", { name, description, creator: user.id });
    await List.create({ name, description, creator: user.id });
    console.log("List created successfully");
  } catch (error) {
    return { message: "Database error: Failed to create list" };
  }

  revalidatePath("private/lists");
  redirect("/private/lists");
}

// Get all lists created by current user
export async function getMyLists() {
  const session = await getSession();
  const user = session?.user;
  if (!user) redirect("/");

  try {
    const lists = await List.find({
      creator: user.id,
    }).populate("creator");
    // console.log("Fetched lists: ", lists);
    return lists;
  } catch (error) {
    return { message: "Database error: Failed to find your lists." };
  }
}

export async function getListById(listId: string) {
  const session = await getSession();
  const user = session?.user;
  if (!user) redirect("/");

  try {
    const list = await List.findById(listId);
    console.log("Fetched list: ", list?.name);
    return list;
  } catch (error) {
    return { message: "Database error: Failed to find list - " + listId };
  }
}
