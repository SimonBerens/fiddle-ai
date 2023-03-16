import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"
import { messagesSchema } from "@/utils/schemas"

import { Configuration, OpenAIApi } from "openai"
import { env } from "@/env.mjs"

const configuration = new Configuration({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  apiKey: env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export const submitRouter = createTRPCRouter({
  submit: publicProcedure.input(messagesSchema).mutation(async ({ input }) => {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: input,
    })
    return {
      code: completion.data.choices[0]?.message?.content,
    }
  }),
})
