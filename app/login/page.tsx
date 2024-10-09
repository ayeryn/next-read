import { IconBrandGoogle, IconBrandGithub } from "@tabler/icons-react";
import { signIn } from "@/auth";
import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";

const SignIn = async () => {
  const session = await getSession();
  const user = session?.user;
  if (user) redirect("/");

  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] ">
      <div className="flex flex-col items-center justify-center">
        {/**
         * flex: to control how flex items both grow and shrink.
         * (https://tailwindcss.com/docs/flex)
         * flex-col: to position flex items vertically, aka stacking them
         * items-center: to align items along the center of the container’s cross axis:
         * justify-center: to justify items along the center of the container’s main axis:
         */}
        <h2 className="font-bold text-xl text-neutral-800">
          So happy to see you here!
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm my-2">
          Please choose from the following login methods.
        </p>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 to-transparent my-8 h-[1px] w-full" />

      <section className="flex flex-col space-y-4">
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}>
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50"
            type="submit">
            <IconBrandGoogle className="h-4 w-4 text-neutral-800" />
            <span className="text-neutral-700text-sm">Google</span>
          </button>
        </form>
        <form
          action={async () => {
            "use server";
            await signIn("github");
          }}>
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50"
            type="submit">
            <IconBrandGithub className="h-4 w-4 text-neutral-800" />
            <span className="text-neutral-700text-sm">Github</span>
          </button>
        </form>
      </section>
    </div>
  );
};

export default SignIn;
