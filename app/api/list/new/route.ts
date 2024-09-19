import connectToDb from "@/lib/db";
import { List } from "@/models/list";
export const POST = async (req) => {
  const { userId, name, description } = await req.json();

  try {
    await connectToDb();
    const newList = new List({
      creator: userId,
      name,
      description,
    });

    await newList.save();
    return new Response(JSON.stringify(newList), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new list", { status: 500 });
  }
};
