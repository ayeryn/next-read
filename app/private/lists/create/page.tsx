import Form from "@/components/create-form";

export default function CreateList() {
  return (
    <main>
      <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212]  dark:bg-black">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Create List
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm my-2 dark:text-neutral-300">
            Please fill out required(*) fields to create a list.
          </p>
        </div>
        <Form />
      </div>
    </main>
  );
}
