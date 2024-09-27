import BookList from "@/components/book-list";
import { getListById } from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const listId = params.id;
  if (!listId) redirect("/private/lists");

  const books = [
    {
      title: "The Scarlet Letter",
      authors: ["Arthur Conan Doyle"],
      publisher: "Penguin Random House",
      publishedDate: "1800-01-01",
      description: "The first Sherlock Holmes story",
      categories: ["classics", ""],
      pageCount: Number,
      thumbnail: String,
      googleId: { type: String, unique: true }, // Use Google Book ID to avoid duplicates
    },
  ];

  const list = await getListById(listId);
  return (
    <main>
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold">{list.name}</h1>
        <p className="text-sm mt-2">{list.description}</p>
      </div>
      <BookList />
    </main>
  );
}
