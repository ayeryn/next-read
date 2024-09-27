import Form from "@/components/edit-form";

export default async function Page({ params }: { params: { id: string } }) {
  const listId = params.id;
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212]  dark:bg-black">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Edit List
        </h2>
      </div>
      <Form listId={listId} />
    </div>
  );
}
