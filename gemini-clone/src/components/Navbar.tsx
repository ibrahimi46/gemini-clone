import { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import ModelSelect from "./ModelSelect";
import AccountInfo from "./AccountInfo";

interface NavbarProps {
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
}: NavbarProps) {
  const [isModelDropDown, setIsModelDropDown] = useState<boolean>(false);
  const [showAccountInfo, setShowAccountInfo] = useState<boolean>(false);
  const modelDropdownRef = useRef<HTMLDivElement>(null);
  const accountInfoDropdownRef = useRef<HTMLDivElement>(null);

  const handleModelDropDown = () => {
    setIsModelDropDown(!isModelDropDown);
  };

  const handleAccountInfoDropdown = () => {
    setShowAccountInfo(!showAccountInfo);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modelDropdownRef.current &&
        !modelDropdownRef.current.contains(event.target as Node)
      ) {
        setIsModelDropDown(false);
      }

      if (
        accountInfoDropdownRef.current &&
        !accountInfoDropdownRef.current.contains(event.target as Node)
      ) {
        setShowAccountInfo(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    //cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modelDropdownRef, accountInfoDropdownRef]);

  return (
    <>
      {/**main navigation bar container */}
      <nav className="sticky top-0 z-50 pt-3 pb-2 px-4 flex justify-between">
        {/**name and model with hamburger icon */}
        <div className="flex gap-2 items-center">
          <button
            className="hover:bg-gray-200 flex items-center justify-center p-2 rounded-full md:hidden"
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          >
            <img src={assets.menu_icon} alt="Open Menu" className="h-5 w-5" />
          </button>
          {/**name and model container */}
          <div className=" flex justify-between flex-col">
            <h1 className="text-xl cursor-pointer dark:text-gray1">Gemini</h1>
            <div
              className="flex cursor-pointer bg-gray-100 dark:bg-[#2a2a2a] hover:bg-gray-200 rounded-lg px-3 items-center transition-all duration-300 ease-in-out"
              onClick={handleModelDropDown}
            >
              <div className="text-sm dark:text-[#80868b] h-full">
                2.5 Flash
              </div>
              <div className="flex items-center">
                <img src={assets.caret_down} alt="dropdown-icon" />
              </div>
            </div>
          </div>
          <div
            ref={modelDropdownRef}
            className={`absolute z-50 top-16 left-4 transition-all hidden md:block duration-300 transform origin-top ${
              isModelDropDown
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <ModelSelect />
          </div>
        </div>
        {/**upgrade and profile pic container */}
        <div className=" flex items-center gap-6">
          <button className="text-sm bg-gray-100 py-2 px-5 rounded-lg flex items-center gap-1 cursor-pointer hover:bg-gray-200 dark:bg-[#2a2a2a]">
            <img
              src={assets.gemini_icon}
              alt="gemini-icon"
              className="h-6 w-6"
            />
            <p className="dark:text-[#a0a6ab]">Upgrade</p>
          </button>
          <img
            src={assets.user_icon}
            alt="user-profile-pic"
            className="h-9 w-9 rounded-full cursor-pointer"
            onClick={handleAccountInfoDropdown}
          />
          <div
            ref={accountInfoDropdownRef}
            className={`dark:bg-graySidebar dark:text-gray-300 bg-[#f0f4f9] transition-all duration-300 origin-top absolute z-50 top-20 py-2 px-5 right-4 rounded-3xl ${
              showAccountInfo
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <AccountInfo
              handleAccountInfoDropdown={handleAccountInfoDropdown}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
