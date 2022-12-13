import { ScoreItemType } from "../types/types";

const ScoreItem = ({ title, value, isSpecial }: ScoreItemType) => {
  return (
    <div
      className={`rounded flex justify-between items-center text-black ${
        isSpecial
          ? "bg-gradient-to-r from-teal-dark to-teal-blue"
          : "bg-zinc-200"
      }  h-[50px] mb-[10px] px-[10px]`}
    >
      <div
        className={`text-[20px] ${
          isSpecial ? "text-gray-100" : "text-gray-700"
        }`}
      >
        {title}
      </div>
      <div
        className={`rounded bg-slate-50 h-[36px] w-[50px] text-gray-500 text-[24px] font-bold flex justify-center items-center hover:cursor-pointer`}
      >
        {value}
      </div>
    </div>
  );
};

export default ScoreItem;
