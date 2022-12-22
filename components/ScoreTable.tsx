import ScoreItem from "./ScoreItem";
import { RollPoints } from "../types/types";

type ScoreTableProps = {
  rollPoints: RollPoints;
};

const ScoreTable = ({ rollPoints }: ScoreTableProps) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col w-[49%]">
        <ScoreItem title="One" value={rollPoints.one} />
        <ScoreItem title="Two" value={rollPoints.two} />
        <ScoreItem title="Three" value={rollPoints.three} />
        <ScoreItem title="Four" value={rollPoints.four} />
        <ScoreItem title="Five" value={rollPoints.five} />
        <ScoreItem title="Six" value={rollPoints.six} />
        <ScoreItem title="Total" value={0} isSpecial />
        <ScoreItem title="Bonus" value={0} isSpecial />
      </div>
      <div className="flex flex-col w-[49%]">
        <ScoreItem title="Three of a kind" value={rollPoints.threeOAK} />
        <ScoreItem title="Four of a kind" value={rollPoints.fourOAK} />
        <ScoreItem title="Full house" value={rollPoints.fullHouse} />
        <ScoreItem title="Small straight" value={rollPoints.smallS} />
        <ScoreItem title="Large straight" value={rollPoints.largeS} />
        <ScoreItem title="Yahtzee" value={rollPoints.yahtzee} />
        <ScoreItem title="Chance" value={rollPoints.chance} />
        <ScoreItem title="Score" value={0} isSpecial />
      </div>
    </div>
  );
};

export default ScoreTable;
