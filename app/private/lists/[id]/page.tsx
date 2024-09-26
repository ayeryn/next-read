import { getListById } from "@/lib/actions";
import { redirect } from "next/navigation";
import React from "react";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    id?: string;
  };
}) {
  const listId = searchParams?.id;
  if (!listId) redirect("/private/lists");

  const list = await getListById(listId);
  return (
    <div>
      <h1 className="text-2xl">List Page</h1>
      <p>{list.name}</p>
      <p>{list.description}</p>
    </div>
  );
}
