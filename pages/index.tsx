import React, { useState, useEffect } from "react";
import Die from "../components/Die";
import { RollPoints } from "../types/types";
import ScoreTable from "../components/ScoreTable";

function App() {
  const [dice, setDice] = useState([
    { number: 1, string: "one", selected: false },
    { number: 2, string: "two", selected: false },
    { number: 3, string: "three", selected: false },
    { number: 4, string: "four", selected: false },
    { number: 5, string: "five", selected: false },
  ]);
  const [rollsLeft, setRollsLeft] = useState<number>(3);
  const [roll, setRoll] = useState<never[] | number[]>([]);
  const [rollPoints, setRollPoints] = useState<RollPoints>({
    ones: 0,
    twos: 0,
    threes: 0,
    fours: 0,
    fives: 0,
    sixes: 0,
    threeOAK: 0,
    fourOAK: 0,
    fullHouse: 0,
    smallS: 0,
    largeS: 0,
    chance: 0,
    yahtzee: 0,
  });

  useEffect(() => {
    if (roll.length) {
      console.log(roll);
      calculatePoints(rollPoints, roll);
      console.log(rollPoints);
    }
  }, [dice, roll, rollPoints]);

  function calculatePoints(rollPoints, roll) {
    // TODO: The logic needs to be improved, it's not working
    const sortedRoll = roll.sort();
    const joinedRoll = sortedRoll.join("");
    if (sortedRoll.every((item, index, arr) => item === arr[0])) {
      setRollPoints({ ...rollPoints, yahtzee: 50 });
      const totalSum = sortedRoll.reduce((acc, cur) => acc + cur);
      switch (sortedRoll[0]) {
        case 1:
          setRollPoints({ ...rollPoints, ones: totalSum });
        case 2:
          setRollPoints({ ...rollPoints, twos: totalSum });
        case 3:
          setRollPoints({ ...rollPoints, threes: totalSum });
        case 4:
          setRollPoints({ ...rollPoints, fours: totalSum });
        case 5:
          setRollPoints({ ...rollPoints, fives: totalSum });
        case 6:
          setRollPoints({ ...rollPoints, sixes: totalSum });
        default:
          console.error("Wrong dice value");
      }
      setRollPoints({ ...rollPoints, chance: totalSum });
      setRollPoints({ ...rollPoints, threeOAK: 30 });
      setRollPoints({ ...rollPoints, fourOAK: 40 });
    }
    if (/(.)\1{3}/.test(joinedRoll)) {
      setRollPoints({ ...rollPoints, fourOAK: 40 });
      setRollPoints({ ...rollPoints, threeOAK: 30 });
    } else if (/(.)\1{2}(.)\2|(.)\3(.)\4{2}/.test(joinedRoll)) {
      setRollPoints({ ...rollPoints, fullHouse: 25 });
    } else if (/(.)\1{2}/.test(joinedRoll)) {
      setRollPoints({ ...rollPoints, threeOAK: 30 });
    }
  }

  function toggleSelected(number: number) {
    if (rollsLeft) {
      const newDice = dice.map((die) => {
        if (die.number === number) {
          return { ...die, selected: !die.selected };
        }
        return die;
      });
      setDice(newDice);
    }
  }

  // TODO: Need to hide dice before first roll, not show 5 ones

  function rollDice() {
    if (rollsLeft) {
      let rollArr = [];
      // FIXME: Maybe we need to use the roll from the state
      for (let k = 1; k <= dice.length; k++) {
        if (!dice[k - 1].selected) {
          let die = document.getElementById(`dice${k}`);
          let diceRoll = Math.floor(Math.random() * 5 + 1);
          rollArr.push(diceRoll);
          for (let i = 1; i <= 5; i++) {
            die?.classList.remove("show-" + i);
            if (diceRoll === i) {
              die?.classList.add("show-" + i);
            }
          }
        }
      }
      setRoll((prevRoll) => rollArr);
      setRollsLeft((prevRolls) => prevRolls - 1);
    }
  }

  return (
    <div className="App flex flex-col justify-center items-center">
      <div
        className="
      rounded-lg 
      w-full lg:w-5/6 xl:w-3/5
      h-full lg:h-[95%] 
      bg-basic-white"
      >
        <div className="lg:rounded-t-lg bg-gradient-to-r from-teal-blue to-teal-dark xs:p-[12px] md:p-[20px] lg:p-[50px]">
          <div className="flex justify-center items-center my-10">
            <div className="container flex justify-between">
              {dice.map((die) => (
                <Die
                  key={die.number}
                  nameN={die.number}
                  nameS={die.string}
                  selected={die.selected}
                  onClick={toggleSelected}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="roll-button m-5 w-100% flex justify-between">
          <button
            onClick={rollDice}
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded w-[49%] disabled:opacity-[0.3] disabled:bg-orange-400"
            disabled={!rollsLeft}
          >
            <span className="flex justify-between">
              <span>Roll dice</span>
              <span className="bg-white w-[24px] h-[24px] rounded-full text-orange-500 font-[900] ">
                {rollsLeft}
              </span>
            </span>
          </button>
          <button
            onClick={() => console.log("Played")}
            className="bg-emerald-500 hover:bg-emerald-600 disabled:opacity-[0.3] disabled:bg-emerald-500 text-white font-bold py-2 px-4 rounded w-[49%]"
          >
            Play
          </button>
        </div>
        <div className="px-[20px]">
          <ScoreTable rollPoints={rollPoints} />
        </div>
      </div>
    </div>
  );
}

export default App;
