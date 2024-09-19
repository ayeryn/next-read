"use client";
import { Button } from "@/components/ui/button";
import { IconPlaylistAdd } from "@tabler/icons-react";
// import { getSession } from "next-auth/react";
import Link from "next/link";
// import connectToDb from "@/lib/db";
// import { useEffect, useState } from "react";

const Lists = () => {
  return (
    <main>
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl font-semibold">My Lists</h1>
        <Button asChild>
          <Link href="/create-list">
            <IconPlaylistAdd className="mr-1" />
            New List
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default Lists;
