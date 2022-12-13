import ScoreItem from "./ScoreItem";

const ScoreTable = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col w-[49%]">
        <ScoreItem title="One" value={5} />
        <ScoreItem title="Two" value={10} />
        <ScoreItem title="Three" value={15} />
        <ScoreItem title="Four" value={20} />
        <ScoreItem title="Five" value={25} />
        <ScoreItem title="Six" value={30} />
        <ScoreItem title="Total" value={75} isSpecial />
        <ScoreItem title="Bonus" value={35} isSpecial />
      </div>
      <div className="flex flex-col w-[49%]">
        <ScoreItem title="Three of a kind" value={23} />
        <ScoreItem title="Four of a kind" value={19} />
        <ScoreItem title="Full house" value={25} />
        <ScoreItem title="Small straight" value={30} />
        <ScoreItem title="Large straight" value={40} />
        <ScoreItem title="Chance" value={15} />
        <ScoreItem title="Yahtzee" value={50} />
        <ScoreItem title="Score" value={320} isSpecial />
      </div>
    </div>
  );
};

export default ScoreTable;
