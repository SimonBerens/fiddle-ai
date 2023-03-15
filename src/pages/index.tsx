import { type NextPage } from "next"
import { PromptBox } from "@/components/PromptBox"
import { api } from "@/utils/api"

const Home: NextPage = () => {
  const submit = api.submit.submit.useMutation()

  async function submitPrompt(prompt: string) {
    const result = await submit.mutateAsync({ prompt })
    alert(result.newPrompt)
  }

  return (
    <>
      <PromptBox submitPrompt={submitPrompt} />
    </>
  )
}

export default Home
