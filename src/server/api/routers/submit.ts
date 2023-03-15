import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"

export const submitRouter = createTRPCRouter({
  submit: publicProcedure
    .input(z.object({ prompt: z.string() }))
    .mutation(({ input }) => {
      return {
        newPrompt: `You submitted ${input.prompt}`,
      }
    }),
})
