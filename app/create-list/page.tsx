import Form from "@/components/Form";
import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";

const CreateList = async () => {
  const session = await getSession();
  const user = session?.user;
  if (!user) redirect("/");

  // const createList = async (e) => {
  //   e.preventDefault(); // prevent form reloading
  //   setSubmitting(true);

  //   try {
  //     const response = await fetch("/api/list/new", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         name: list.name,
  //         userId: session?.user.id,
  //         description: list.description,
  //       }),
  //     });

  //     if (response.ok) {
  //       router.push("/");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };
  // return <Form type="Create" handleSubmit={() => {}} />;
  return <Form type="Create" />;
};

export default CreateList;
