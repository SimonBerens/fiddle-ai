import { type NextPage } from "next"
import { PromptBox } from "@/components/PromptBox"
import { api } from "@/utils/api"
import type { Messages } from "@/utils/schemas"
import { useImmer } from "use-immer"
import { defaultMessages } from "@/messages"

const Home: NextPage = () => {
  const submit = api.submit.submit.useMutation()
  const [messages, setMessages] = useImmer<Messages>(defaultMessages)

  async function submitPrompt(prompt: string) {
    const newMessages: Messages = [
      ...messages,
      { role: "user", content: prompt },
    ]
    const { code } = await submit.mutateAsync(newMessages)
    if (code !== undefined) {
      newMessages.push({ role: "assistant", content: code })
      setMessages(newMessages)
      alert(code)
    }
  }

  return (
    <>
      <PromptBox submitPrompt={submitPrompt} />
    </>
  )
}

export default Home
