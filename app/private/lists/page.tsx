import { Button } from "@/components/ui/button";
import { IconEdit, IconPlaylistAdd, IconTrashX } from "@tabler/icons-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { getMyLists } from "@/lib/actions";
import { DeleteList, UpdateList } from "@/components/list-button";

export default async function Lists() {
  const lists = await getMyLists();
  return (
    <main>
      <div className="grid grid-cols-3 gap-4 items-center justify-center w-full">
        <div></div>
        <div>
          <h1 className="text-2xl font-semibold">My Lists</h1>
        </div>
        <div>
          <Button asChild className="ml-5">
            <Link href="/private/lists/create">
              <IconPlaylistAdd className="mr-1" />
              New List
            </Link>
          </Button>
        </div>
      </div>
      {lists ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>List Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>
                <span className="sr-only">Edit</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lists.map((list) => (
              <TableRow key={list.id}>
                <TableCell className="whitespace-nowrap px-3 py-3">
                  <Link href={`/private/lists/${list.id}`}>{list.name}</Link>
                </TableCell>
                <TableCell className="whitespace-nowrap px-3 py-3">
                  {list.description}
                </TableCell>
                <TableCell>
                  <div className="flex justify-end gap-3">
                    <UpdateList id={list.id} />
                    <DeleteList id={list.id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <></>
      )}
    </main>
  );
}
