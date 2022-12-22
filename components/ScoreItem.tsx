import { ScoreItemType } from "../types/types";

const ScoreItem = ({ title, value, isSpecial }: ScoreItemType) => {
  return (
    <div
      className={`rounded flex justify-between items-center text-black ${
        isSpecial
          ? "bg-gradient-to-r from-teal-dark to-teal-blue"
          : "bg-zinc-200"
      }  h-[45px] mb-[8px] px-[8px]`}
    >
      <div
        className={`text-[18px] ${
          isSpecial ? "text-gray-100" : "text-gray-700"
        }`}
      >
        {title}
      </div>
      <div
        className={`rounded bg-slate-50 h-[30px] w-[42px] text-gray-500 text-[20px] font-bold flex justify-center items-center hover:cursor-pointer ${
          value > 0 ? "animate-[flash_1s_ease-in-out]" : ""
        }`}
      >
        {value}
      </div>
    </div>
  );
};

export default ScoreItem;
