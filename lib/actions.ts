"use server";

import { redirect } from "next/navigation";
import { getSession } from "./getSession";
import { revalidatePath } from "next/cache";
import { List } from "@/models/list";
import { z } from "zod";
import { User } from "@/models/user";
import connectToDb from "./db";

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
const UpdateList = FormSchema.omit({ id: true, creator: true });

// Lists

/**
 * Asynchronously creates a new list based on the provided form data.
 *
 * @param {FormData} formData - The form data containing the list details.
 * @returns {Promise<Object|void>} - Returns an object with error messages if validation fails or a database error occurs, otherwise redirects to the lists page.
 */
export async function createList(formData: FormData) {
  const session = await getSession();
  const sessionUser = session?.user;
  if (!sessionUser) redirect("/");

  await connectToDb();
  const user = await User.findOne({ email: sessionUser.email });

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
    await List.create({ name, description, creator: user._id });
    console.log("List created successfully");
  } catch (error) {
    return { message: "Database error: Failed to create list" };
  }

  revalidatePath("private/lists");
  redirect("/private/lists");
}

/**
 * Retrieves the lists created by the currently authenticated user.
 *
 * This function first checks the user's session to ensure they are authenticated.
 * If the user is authenticated, it connects to the database, retrieves the user's
 * information based on their email, and then fetches all lists created by the user.
 *
 * @returns {Promise<Array|Object>} A promise that resolves to an array of lists created by the user,
 * or an object containing an error message if the operation fails.
 */
export async function getMyLists() {
  const session = await getSession();
  const sessionUser = session?.user;
  if (!sessionUser) redirect("/");

  try {
    await connectToDb();
    const user = await User.findOne({ email: sessionUser.email });
    const userId = user._id.toString();
    const lists = await List.find({
      creator: userId,
    });
    return lists;
  } catch (error) {
    return { message: "Database error: Failed to find your lists." };
  }
}

/**
 * Retrieves a list by its ID.
 *
 * @param {string} listId - The ID of the list to retrieve.
 * @returns {Promise<Object>} The list object if found, or an error message if not.
 */
export async function getListById(listId: string) {
  const session = await getSession();
  const user = session?.user;
  if (!user) redirect("/");

  try {
    await connectToDb();
    const list = await List.findById(listId);
    return list;
  } catch (error) {
    return { message: "Database error: Failed to find list - " + listId };
  }
}

export async function updateList(listId: string, formData: FormData) {
  const session = await getSession();
  const sessionUser = session?.user;
  if (!sessionUser) redirect("/");

  const validatedFields = UpdateList.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing required field. Failed to update list.",
    };
  }

  const { name, description } = validatedFields.data;
  try {
    await connectToDb();
    const existingList = await List.findById(listId);
    existingList.name = name;
    existingList.description = description;
    await existingList.save();
    console.log("List updated successfully");
  } catch (error) {
    return { message: "Database error: Failed to update list" };
  }

  revalidatePath("private/lists");
  redirect("/private/lists");
}

export async function deleteList(listId: string) {
  try {
    await connectToDb();
    await List.findByIdAndDelete(listId);
    console.log("List deleted successfully");
  } catch (error) {
    return { message: "Database error: Failed to delete list" };
  }

  revalidatePath("private/lists");
}
