import { deleteList } from "@/lib/actions";
import { IconEdit, IconPlaylistAdd, IconTrashX } from "@tabler/icons-react";
import Link from "next/link";

export function CreateList() {
  return (
    <button className="btn ml-5 rounded-md border p-2 hover:bg-gray-100">
      <Link href="/private/lists/create">
        <IconPlaylistAdd className="mr-1" />
      </Link>
    </button>
  );
}
export function UpdateList({ id }: { id: string }) {
  return (
    <button className="rounded-md border p-2 hover:bg-gray-100">
      <Link href={`/private/lists/${id}/edit`}>
        <span className="sr-only">Edit</span>
        <IconEdit className="w-5" />
      </Link>
    </button>
  );
}

export function DeleteList({ id }: { id: string }) {
  const deleteListWithId = deleteList.bind(null, id);
  return (
    <form action={deleteListWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <IconTrashX className="w-5" />
      </button>
    </form>
  );
}
