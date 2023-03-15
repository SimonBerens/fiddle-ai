import { type NextPage } from "next"
import { PromptBox } from "@/components/PromptBox"

const Home: NextPage = () => {
  function submitPrompt(prompt: string) {
    alert(prompt)
  }

  return (
    <>
      <PromptBox submitPrompt={submitPrompt} />
    </>
  )
}

export default Home
