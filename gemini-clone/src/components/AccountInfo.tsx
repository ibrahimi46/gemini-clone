import { assets } from "../assets/assets";

interface AccountInfoProps {
  handleAccountInfoDropdown: () => void;
}

export default function AccountInfo({
  handleAccountInfoDropdown,
}: AccountInfoProps) {
  interface CustButtonsProps {
    icon: string;
    name: string;
    style: string;
  }

  const CustButtons = ({ icon, name, style }: CustButtonsProps) => {
    return (
      <div
        className={`bg-gray-50 text-gray-800 dark:hover:bg-[#3d3c3c] dark:bg-backgroundBlack dark:text-gray-300 p-5 flex w-48 items-center gap-2 text-nowrap hover:bg-gray-300 cursor-pointer ${style}`}
      >
        <div>
          <img className="h-5" src={icon} alt={name} />
        </div>
        <p>{name}</p>
      </div>
    );
  };

  return (
    <div className="w-96 flex flex-col gap-3 items-center">
      <div
        className="hover:bg-gray-300 p-1 rounded-full cursor-pointer absolute top-2 right-2"
        onClick={() => handleAccountInfoDropdown()}
      >
        <img className="h-6" src={assets.close_icon} alt="Close" />
      </div>

      <p>notjohndoe@gmail.com</p>
      <div className="flex flex-col items-center gap-2 mt-2">
        <img
          src={assets.user_icon}
          alt="Profile Pic"
          className="h-20 w-20 rounded-full cursor-pointer"
        />
        <p className="text-2xl">Hi, John Doe!</p>
        <button
          className={`py-3 bg-[#f0f4f9] px-7 dark:bg-graySidebar dark:hover:bg-gray-700 border-black border-[1px] rounded-full text-blue-600 hover:bg-[#c1cdd9]`}
        >
          Manage your Google Account
        </button>
      </div>

      <div className="flex gap-[2px]">
        <CustButtons
          icon={assets.plus_icon}
          name={"Add account"}
          style="rounded-l-full "
        />
        <CustButtons
          icon={assets.logout_icon}
          name={"Sign out"}
          style="rounded-r-full"
        />
      </div>

      <p className="text-xs text-gray-500 my-2 dark:text-gray-200">
        Privacy Policy * Terms of Service
      </p>
    </div>
  );
}
