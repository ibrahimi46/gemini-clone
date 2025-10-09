import { assets } from "../assets/assets";
import { useChat } from "../context/useChat";

interface SidebarReducedProps {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SidebarReduced({
  isExpanded,
  setIsExpanded,
}: SidebarReducedProps) {
  const { newChat } = useChat();

  return (
    <div className="flex dark:bg-graySidebar flex-col justify-between items-center py-5  px-2 h-screen bg-[#f0f4f9] w-full">
      <div className="flex flex-col gap-8 justify-between items-center">
        <button
          className="p-2 rounded-full hover:bg-gray-200"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <img src={assets.menu_icon} alt="Show Menu" className="h-5 w-5" />
        </button>
        <button
          className="p-2 rounded-full hover:bg-gray-200"
          onClick={newChat}
        >
          <img src={assets.new_chat} alt="New Chat" />
        </button>
      </div>
      <div>
        <button className="p-2 rounded-full hover:bg-gray-200 flex justify-center">
          <img src={assets.setting_icon} alt="Settings" className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
