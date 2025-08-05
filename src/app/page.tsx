"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";


const Home = () => {

  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({}));
  const [input, setInput] = useState("");

  return (
    <div className="font-bold text-rose-500">
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
      <Button onClick={() => invoke.mutate({ input: input })}>Hello</Button>
    </div>
  );
};
export default Home;
