import { z } from "zod"

export const messageSchema = z.object({
  role: z.enum(["system", "assistant", "user"]),
  content: z.string(),
})

export type Message = z.infer<typeof messageSchema>

export const messagesSchema = z.array(messageSchema)
export type Messages = z.infer<typeof messagesSchema>
