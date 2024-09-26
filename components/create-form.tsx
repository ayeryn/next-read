"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createList } from "@/lib/actions";

export default function Form() {
  return (
    <form className="my-8" action={createList}>
      <div className="mb-3">
        <Label htmlFor="name">List Name*</Label>
        <Input id="name" placeholder="To Read List" type="text" name="name" />
        {/* <div id="name-error" aria-atomic="true" aria-live="polite">
          {state.errors?.name &&
            state.errors.name.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div> */}
      </div>
      <div className="mb-3">
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          placeholder="Books I want to read"
          type="text"
          name="description"
        />
      </div>
      <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] mb-5"
        type="submit">
        Create
      </button>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
    </form>
  );
}
