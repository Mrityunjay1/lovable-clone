"use client"

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";


const Home = () => {

  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({}));

  return (
    <div className="font-bold text-rose-500">
      <Button onClick={() => invoke.mutate({ text: "hello" })}>Hello</Button>
    </div>
  );
};
export default Home;
