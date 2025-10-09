import { useState } from "react";
import InputField from "./components/InputField";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SidebarReduced from "./components/SidebarReduced";
import ChatDisplay from "./components/ChatDisplay";

export default function MainPage() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] =
    useState<boolean>(false);

  const expanded = isExpanded || isHovering;

  return (
    <>
      <div className="flex overflow-hidden h-screen dark:bg-[#131313]">
        {/**sidebar component */}
        <div
          className={`flex overflow-hidden transition-all duration-300 ease-in-out ${
            expanded ? "w-80" : "w-20"
          } hidden md:flex`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {expanded ? (
            <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
          ) : (
            <SidebarReduced
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
            />
          )}
        </div>
        {/**navbar and main section */}
        <div className="flex-1 flex flex-col">
          <Navbar
            isMobileSidebarOpen={isMobileSidebarOpen}
            setIsMobileSidebarOpen={setIsMobileSidebarOpen}
          />

          {/* ChatDisplay takes remaining space */}
          <div className="flex-1 overflow-auto flex items-center justify-center scrollbar-hide">
            <ChatDisplay />
          </div>

          <InputField />

          {isMobileSidebarOpen && (
            <div
              className={`top-0 left-0 h-screen flex fixed z-50 md:hidden bg-[#f0f4f9]
              } transition-transform duration-300 ease-in-out shadow-lg ${
                isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <Sidebar
                isExpanded={true}
                setIsExpanded={setIsMobileSidebarOpen}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
