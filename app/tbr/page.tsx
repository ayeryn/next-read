import { getSession } from "@/lib/getSession";
// import defaultList from "@/data/list.json";
import { redirect } from "next/navigation";
import { getDefaultList } from "@/lib/actions";

export default async function TBR() {
  const session = await getSession();
  const user = session?.user;
  if (!user) redirect("/login");

  const list = await getDefaultList(user.email);

  return (
    <div className="flex flex-col w-full justify-center items-center gap-2 mt-7">
      <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
        My TBR
      </h2>
      <p>{list.description}</p>
      <h2>Here we will have drag and dropppable list to manage books</h2>
    </div>
  );
}
