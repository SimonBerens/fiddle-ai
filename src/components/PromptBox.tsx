import TextareaAutosize from "react-textarea-autosize"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

interface PromptBoxProps {
  submitPrompt: (prompt: string) => Promise<void>
}

export function PromptBox({ submitPrompt }: PromptBoxProps) {
  const [prompt, setPrompt] = useState("")

  async function clearAndSubmitPrompt(prompt: string) {
    setPrompt("")
    await submitPrompt(prompt)
  }

  return (
    <div
      className="flex flex-row items-center
                rounded-lg border border-solid border-gray-300 bg-white
                p-4 outline-none drop-shadow-xl
                focus-within:ring-2 focus-within:ring-indigo-300 w-full"
    >
      <TextareaAutosize
        className="w-full resize-none border-none outline-none"
        placeholder="Write a website that..."
        value={prompt}
        onChange={(evt) => {
          setPrompt(evt.target.value)
        }}
        onKeyDown={(evt) => {
          if (evt.key === "Enter" && !evt.shiftKey) {
            evt.preventDefault()
            void clearAndSubmitPrompt(prompt)
          }
        }}
      />
      <button onClick={() => void clearAndSubmitPrompt(prompt)} className="self-end">
        <PaperAirplaneIcon height="24px" width="24px" />
      </button>
    </div>
  )
}