import { openai, createAgent } from "@inngest/agent-kit";

import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event}) => {
     const codeAgent = createAgent({
      name: "codeAgent",
      system: "You are an expert code writer.  You write readable,maintainable, and efficient code.",
      model: openai({ model: "gpt-4o"}),
    });

    const { output } = await codeAgent.run(
      `Write following snippet for ${event.data.input} `,
    );
    console.log(output);
    return { message: output };
  },
);