import prisma from "@/lib/db";

const Home = async () => {
  const users = await prisma.post.findMany()
  return (
    <div className="font-bold text-rose-500">
      <h1>{JSON.stringify(users)}</h1>
    </div>
  );
};
export default Home;
