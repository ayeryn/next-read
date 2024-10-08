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
