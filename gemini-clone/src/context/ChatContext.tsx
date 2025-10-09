import { createContext, useState, type ReactNode } from "react";

const API_BASE_URL = import.meta.env.VITE_API_URL;

interface Chat {
  id: string;
  title: string;
  messages: Message[];
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatContextProps {
  chats: Chat[];
  isLoading: boolean;
  currentChatId: string | null;
  currentChatMessage: Message[];
  sendMessage: (prompt: string) => Promise<void>;
  newChat: () => void;
  selectChat: (id: string) => void;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const ChatContextProvider = ({ children }: { children: ReactNode }) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);

  // find the currentid messages
  const currentChatMessage =
    chats.find((chat) => chat.id === currentChatId)?.messages || [];

  const sendMessage = async (prompt: string) => {
    if (!prompt) return;

    let chatId = currentChatId;
    if (!chatId) {
      chatId = Date.now().toString();
      const newChatObj: Chat = {
        id: chatId,
        title: "",
        messages: [],
      };
      setChats((prevChats) => [...prevChats, newChatObj]);
      setCurrentChatId(chatId);
    }

    const userMessage: Message = { role: "user", content: prompt };

    setChats((prevChat) =>
      prevChat.map((item) =>
        item.id === chatId
          ? {
              ...item,
              messages: [...item.messages, userMessage],
              title: prompt,
            }
          : item
      )
    );

    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      // contains ai response
      const data = await response.json();

      // add ai response to the chats

      const aiMsg: Message = { role: "assistant", content: data.text };
      setChats((prevChat) =>
        prevChat.map((item) =>
          item.id === chatId
            ? { ...item, messages: [...item.messages, aiMsg] }
            : item
        )
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const newChat = () => {
    const newId = Date.now().toString();
    const newChat = {
      id: newId,
      title: "",
      messages: [],
    };
    setChats((prevChats) => [...prevChats, newChat]);
    setCurrentChatId(newId);
  };

  const selectChat = (id: string) => {
    setCurrentChatId(id);
  };

  return (
    <ChatContext.Provider
      value={{
        currentChatId,
        sendMessage,
        currentChatMessage,
        isLoading,
        newChat,
        selectChat,
        chats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
