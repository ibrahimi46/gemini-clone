import type React from "react";
import { assets } from "../assets/assets";
import { useChat } from "../context/useChat";

interface SidebarProps {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

interface RecentChatElementProps {
  title: string;
  handleSelectChat: (id: string) => void;
  id: string;
}

function RecentChatElement({
  title,
  handleSelectChat,
  id,
}: RecentChatElementProps) {
  return (
    <div onClick={() => handleSelectChat(id)}>
      <p
        className={`hover:bg-gray-200 dark:hover:bg-[#3d3c3c]  dark:text-gray1 py-2 px-3 rounded-full cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis`}
      >
        {title}
      </p>
    </div>
  );
}

export default function Sidebar({ setIsExpanded }: SidebarProps) {
  const { newChat, chats, selectChat } = useChat();

  function handleClose() {
    setIsExpanded((prev) => !prev);
  }

  function handleSelectChat(id: string) {
    selectChat(id);
  }

  return (
    <>
      {/**sidebar main container */}
      <div className="bg-[#f0f4f9] flex flex-col px-3 py-2 w-full dark:bg-graySidebar">
        {/**sidebar top container */}
        <div className="h-28 mt-3 flex flex-col justify-between">
          <div className="flex justify-between">
            <button
              className="flex p-2 hover:bg-gray-200 rounded-full"
              onClick={handleClose}
            >
              <img src={assets.menu_icon} alt="Open Menu" className="h-5 w-5" />
            </button>
            <button className="flex p-2 hover:bg-gray-200 rounded-full">
              <img
                src={assets.search_icon}
                alt="Open Menu"
                className="h-5 w-5"
              />
            </button>
          </div>
          <div>
            <button
              className="flex gap-3 w-full hover:bg-gray-200 py-2 px-3 rounded-full dark:hover:bg-hover"
              onClick={newChat}
            >
              <div className="flex items-end">
                <img src={assets.new_chat} alt="New Chat" className="h-5 w-5" />
              </div>
              <p className="dark:text-gray-500">New Chat</p>
            </button>
          </div>
        </div>

        {/**recent chats container */}
        <div className="flex-1 overflow-y-auto py-2 scrollbar-hide">
          <p className="px-3 mb-1 text-gray-500">Recent</p>
          {chats.map((chat) => (
            <>
              <RecentChatElement
                title={chat.title}
                handleSelectChat={handleSelectChat}
                id={chat.id}
                key={chat.id}
              />
            </>
          ))}
        </div>

        {/**sidebar footer container */}
        <div className="w-full h-20 flex flex-col justify-center">
          <button className="flex gap-5 items-center hover:bg-gray-200 py-2 px-3 rounded-full">
            <img src={assets.setting_icon} alt="Settings" className="h-5 w-5" />
            <p className="text-gray-600 whitespace-nowrap overflow-hidden">
              Settings and help
            </p>
          </button>
        </div>
      </div>
    </>
  );
}
