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
    newMessages.push({ role: "assistant", content: code })
    setMessages(newMessages)
  }

  return (
    <>
      <iframe className="w-full h-screen"
              srcDoc={messages[messages.length - 1]?.content}/>
      <div className="fixed inset-x-0 bottom-0 mb-10 px-4
      flex flex-row justify-center
      md:mx-auto md:w-[800px]">
        <PromptBox submitPrompt={submitPrompt} />
        <button className="p-4 ml-4 drop-shadow-xl bg-white
        rounded-lg border border-solid border-gray-300
        hover:ring-2 hover:ring-indigo-300"
        onClick={() => setMessages(defaultMessages)}>
          Reset
        </button>
      </div>
    </>
  )
}

export default Home
