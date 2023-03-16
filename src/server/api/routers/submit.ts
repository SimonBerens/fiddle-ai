import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"
import { messagesSchema } from "@/utils/schemas"

import { Configuration, OpenAIApi } from "openai"
import { env } from "@/env.mjs"

const configuration = new Configuration({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  apiKey: env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

const codeBlockRegex = /```[^\n]*\n([\S\s]*?)```/g;

function extractCode(text: string): string {
  const matches = Array.from(text.matchAll(codeBlockRegex), match => match[1]);

  if (matches.length === 0) {
    return text;
  }

  return matches.join("\n");
}



export const submitRouter = createTRPCRouter({
  submit: publicProcedure.input(messagesSchema).mutation(async ({ input }) => {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: input,
      max_tokens: 2000,
    })
    const content = completion.data.choices[0]?.message?.content;
    return {
      code: extractCode(content ?? ""),
    }
  }),
})
