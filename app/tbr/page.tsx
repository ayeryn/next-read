import { getSession } from "@/lib/getSession";
import defaultList from "@/data/list.json";
import { redirect } from "next/navigation";

export default async function TBR() {
  const session = await getSession();
  const user = session?.user;
  if (!user) redirect("/");

  return (
    <div className="flex flex-col w-full justify-center items-center gap-2 mt-7">
      <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
        My TBR
      </h2>
      <p>{defaultList.description}</p>
      <h2>Here we will have drag and dropppable list to manage books</h2>
    </div>
  );
}
