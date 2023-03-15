import TextareaAutosize from "react-textarea-autosize"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import { useState } from "react";

interface PromptBoxProps {
  submitPrompt: (prompt: string) => void
}

export function PromptBox({ submitPrompt }: PromptBoxProps) {
  const [prompt, setPrompt] = useState("")

  function clearAndSubmitPrompt(prompt: string) {
    setPrompt("")
    submitPrompt(prompt)
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 mb-10 flex w-full flex-row items-center
                rounded-lg border border-solid border-gray-300 bg-white py-4
                px-4 outline-none drop-shadow-xl
                focus-within:ring-2 focus-within:ring-indigo-300 md:mx-auto md:w-[800px]"
    >
      <TextareaAutosize
        className="w-full resize-none border-none outline-none"
        placeholder="Give me a command!"
        value={prompt}
        onChange={(evt) => {
          setPrompt(evt.target.value)
        }}
        onKeyDown={(evt) => {
          if (evt.key === "Enter" && !evt.shiftKey) {
            clearAndSubmitPrompt(prompt)
            evt.preventDefault()
          }
        }}
      />
      <button onClick={() => clearAndSubmitPrompt(prompt)} className="self-end">
        <PaperAirplaneIcon height="24px" width="24px" />
      </button>
    </div>
  )
}