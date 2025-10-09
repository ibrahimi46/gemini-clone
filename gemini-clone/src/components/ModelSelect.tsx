import { assets } from "../assets/assets";

export default function ModelSelect() {
  interface ModelSelectComponentProps {
    t1: string;
    t2: string;
    t3?: string;
    icon?: string;
    iconText?: string;
    buttonClassName?: string;
  }

  const ModelSelectComponent = ({
    t1,
    t2,
    t3,
    icon,
    iconText,
    buttonClassName,
  }: ModelSelectComponentProps) => {
    return (
      <div
        className={`flex py-2 px-4 text-xs dark:text-gray-300 dark:hover:bg-hover justify-between hover:bg-gray-300 cursor-pointer`}
      >
        <div>
          <p>{t1}</p>
          <p>{t2}</p>
          <p>{t3}</p>
        </div>
        <div className="flex items-center">
          {iconText ? (
            <button className={`py-2 rounded-full ${buttonClassName}`}>
              {iconText}
            </button>
          ) : icon ? (
            <img src={icon} className=" py-0" />
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`flex flex-col dark:bg-graySidebar bg-[#f0f4f9] text-sm w-96 rounded-md mt-1`}
    >
      <p className="mb-3 text-gray-500 ml-4 mt-3">Choose your model</p>

      <ModelSelectComponent
        t1={"Fast all-around help"}
        t2={"2.5 Flash"}
        iconText={"New"}
        buttonClassName="bg-blue-500 text-gray-50 px-3"
      />

      <ModelSelectComponent
        t1={"Reasoning, math & code"}
        t2={"2.5 Pro"}
        icon={assets.check_cirlce}
      />

      <ModelSelectComponent
        t1={"Upgrade to Google AI Pro"}
        t2={"Get our most capable"}
        t3="models & features"
        iconText={"Upgrade"}
        buttonClassName="bg-gray-200 px-7 text-blue-600"
      />
    </div>
  );
}
