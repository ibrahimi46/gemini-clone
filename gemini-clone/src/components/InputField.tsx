import { useState } from "react";
import { useChat } from "../context/useChat";
import { assets } from "../assets/assets";

export default function InputField() {
  const [input, setInput] = useState("");
  const { sendMessage, isLoading, newChat } = useChat();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendMessage(input);
    setInput("");
  };

  return (
    <div className="flex flex-col items-center mx-4 mb-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 border border-gray-300 rounded-2xl p-3 w-full max-w-3xl px-4"
      >
        <textarea
          name="input"
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Gemini"
          className="resize-none h-10 max-h-40 overflow-y-auto p-2 rounded-lg focus:outline-none scrollbar-hide dark:text-white dark:bg-[#131313]"
          disabled={isLoading}
        />
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div
              onClick={newChat}
              className="hover:bg-gray-200 cursor-pointer flex justify-center items-center gap-1 rounded-full px-3 py-0"
            >
              <img src={assets.plus_icon} alt="new chat" className="h-6 w-6" />
              <p className="text-gray-500">New Chat</p>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600 disabled:bg-gray-400"
          >
            Send
          </button>
        </div>
      </form>
      <div className="flex justify-center mt-2">
        <p className="text-xs text-gray-400 mb-3">
          Gemini can make mistakes, so double-check it
        </p>
      </div>
    </div>
  );
}
