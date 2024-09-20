"use client";
import { Button } from "@/components/ui/button";
import { IconPlaylistAdd } from "@tabler/icons-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

interface TestList {
  id: number;
  name: string;
  description: string;
}

const mockLists: TestList[] = [
  { id: 1, name: "fav", description: "favorite books" },
  { id: 2, name: "To Read", description: "TBR" },
];
const Lists = () => {
  const lists = mockLists; // Use mock data for now
  return (
    <main>
      <div className="grid grid-cols-3 gap-4 items-center justify-center">
        <div></div>
        <div>
          <h1 className="text-2xl font-semibold">My Lists</h1>
        </div>
        <div>
          <Button asChild className="ml-5">
            <Link href="/create-list">
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
            </TableRow>
          </TableHeader>
          <TableBody>
            {lists.map((list) => (
              <TableRow key={list.id}>
                <TableCell>{list.name}</TableCell>
                <TableCell>{list.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Lists;
