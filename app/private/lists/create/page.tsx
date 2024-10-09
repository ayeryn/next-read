import Form from "@/components/create-form";

export default function CreateList() {
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-primary border border-primary">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold text-2xl">Create List</h2>
        <p className="text-sm max-w-sm my-2 ">
          Please fill out required(*) fields to create a list.
        </p>
      </div>
      <Form />
    </div>
  );
}
