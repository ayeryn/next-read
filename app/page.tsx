import Feed from "@/components/feed";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-base-content text-3xl font-semibold mt-10 mb-5 sm:text-4xl">
        What is your next read?
      </h1>
      <div className="bg-gradient-to-r from-transparent via-primary to-transparent my-6 h-[1px] w-full" />
      <Feed />
    </div>
  );
}
