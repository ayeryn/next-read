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
import { CreateList, DeleteList, UpdateList } from "@/components/list-button";

export default async function Lists() {
  // TODO: Add a message for no lsits
  const lists = await getMyLists();
  return (
    <div className="flex flex-col items-center justify-center w-full my-5">
      <div className="grid grid-cols-3 gap-4">
        <div></div>
        <div>
          <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
            My Lists
          </h2>
        </div>
        <div>
          <CreateList />
        </div>
      </div>
      <div className="a-w-3xl">
        {lists ? (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <TableHead>List Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>
                    <span className="sr-only">Edit</span>
                  </TableHead>
                </tr>
              </thead>
              <TableBody>
                {lists.map((list) => (
                  <TableRow key={list.id}>
                    <TableCell className="whitespace-nowrap px-3 py-3">
                      <Link href={`/private/lists/${list.id}`}>
                        {list.name}
                      </Link>
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
            </table>
          </div>
        ) : (
          <>
            <h4>You do not have any list. Create a new one!</h4>
          </>
        )}
      </div>
    </div>
  );
}
