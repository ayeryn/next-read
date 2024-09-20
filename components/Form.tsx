"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormProps {
  type: string;
  // handleSubmit: (e: Event) => Promise<void>;
  // handleSubmit: () => void;
}

const Form: React.FC<FormProps> = ({ type }) => {
  // const Form: React.FC<FormProps> = ({ type, handleSubmit }) => {
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212]  dark:bg-black">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          {type} List
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm my-2 dark:text-neutral-300">
          Please fill out required(*) fields to create a list.
        </p>
      </div>
      <form className="my-8">
        <div className="mb-3">
          <Label htmlFor="name">List Name*</Label>
          <Input id="name" placeholder="To Read List" type="text" name="name" />
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
          {type}
        </button>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
};

export default Form;
