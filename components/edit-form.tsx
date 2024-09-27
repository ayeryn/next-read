import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getListById, updateList } from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function Form({ listId }: { listId: string }) {
  const list = await getListById(listId);
  if (!list) redirect("/private/lists");

  const updateListWithId = updateList.bind(null, listId);

  return (
    <form className="my-8" action={updateListWithId}>
      <div className="mb-3">
        <Label htmlFor="name">Name*</Label>
        <Input id="name" type="text" name="name" defaultValue={list.name} />
      </div>
      <div className="mb-3">
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          type="text"
          name="description"
          defaultValue={list.description}
          placeholder="Enter a description for this list."
        />
      </div>
      <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] mb-5"
        type="submit">
        Edit
      </button>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
    </form>
  );
}
