import { type NextPage } from "next"
import { PromptBox } from "@/components/PromptBox"
import { api } from "@/utils/api"
import type { Messages } from "@/utils/schemas"
import { useImmer } from "use-immer"
import { defaultMessages } from "@/messages"
import { LoadingSpinner } from "@/components/LoadingSpinner"

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
      <iframe
        className="h-screen w-full"
        srcDoc={messages[messages.length - 1]?.content}
      />
      <div
        className="fixed inset-x-0 bottom-0 mb-10 flex
      flex-row justify-center px-4
      md:mx-auto md:w-[800px]"
      >
        <PromptBox submitPrompt={submitPrompt} />
        <button
          className="ml-4 rounded-lg border border-solid
        border-gray-300 bg-white p-4 drop-shadow-xl
        hover:ring-2 hover:ring-indigo-300"
          onClick={() => setMessages(defaultMessages)}
        >
          Reset
        </button>
      </div>
      {submit.isLoading && <LoadingSpinner />}
    </>
  )
}

export default Home
