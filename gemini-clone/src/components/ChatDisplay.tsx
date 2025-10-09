import { useChat } from "../context/useChat";

export default function ChatDisplay() {
  const { currentChatMessage, isLoading } = useChat();

  return (
    <div
      className="flex w-full max-w-3xl px-4 py-12 my-10 flex-col overflow-y-scroll scrollbar-hide
        h-[calc(100vh-160px)]"
    >
      {currentChatMessage.length === 0 ? (
        <div>
          <div className="flex-1 flex flex-col items-center justify-center mt-12">
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-outfit text-3xl bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                Hello, John Doe
              </h1>
              <h1 className="text-gray-500 font-outfit text-3xl">
                What should we do today?
              </h1>
            </div>
          </div>
        </div>
      ) : (
        currentChatMessage.map((msg, idx) => (
          <div
            key={idx}
            className={`w-full my-2 ${
              msg.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block font-light dark:bg-gray-500 dark:text-gray-200 rounded-2xl px-4 py-2 break-words ${
                msg.role === "user"
                  ? "bg-blue-500 text-white max-w-[70%]"
                  : "bg-gray-200 text-black max-w-[70%]"
              }`}
              title={msg.content} // shows full text on hover
            >
              {msg.content}
            </div>
          </div>
        ))
      )}
      {isLoading && (
        <div className="w-full text-center mt-4 text-gray-400 animate-pulse">
          Generating response...
        </div>
      )}
    </div>
  );
}
