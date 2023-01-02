import React, { useState, useEffect, useCallback } from "react";
import io from "socket.io-client";
import Die from "../components/Die";
import { RollPoints } from "../types/types";
import ScoreTable from "../components/ScoreTable";
import { sumDice, groupDice } from "../utils/countDice";
import { numToString } from "../utils/numsToStrings";
import { Dice } from "../types/types";
let socket;

const rollPointsDefault = {
  one: 0,
  two: 0,
  three: 0,
  four: 0,
  five: 0,
  six: 0,
  threeOAK: 0,
  fourOAK: 0,
  fullHouse: 0,
  smallS: 0,
  largeS: 0,
  yahtzee: 0,
  chance: 0,
};

const diceDefault = [
  { number: 1, string: "one", roll: "", selected: false },
  { number: 2, string: "two", roll: "", selected: false },
  { number: 3, string: "three", roll: "", selected: false },
  { number: 4, string: "four", roll: "", selected: false },
  { number: 5, string: "five", roll: "", selected: false },
];

const maxRolls = 10;

function App() {
  const [dice, setDice] = useState<Dice>(diceDefault);
  const [rollsLeft, setRollsLeft] = useState<number>(maxRolls);
  const [rollPoints, setRollPoints] = useState<RollPoints>(rollPointsDefault);

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("sendRoll", (msg) => {
      console.log(msg);
    });
  };

  function setRoll(dice: Dice) {
    return dice.map((die) => die.roll);
  }

  const calculatePoints = (dice: Dice) => {
    const roll = setRoll(dice);
    const sortedRoll = roll.sort();
    const joinedRoll = sortedRoll.join("");
    const groupedDice = groupDice(sortedRoll);

    Object.entries(groupedDice).forEach((item) => {
      setRollPoints((prevPoints) => ({
        ...prevPoints,
        [numToString[item[0]]]: Number(item[0]) * item[1],
      }));
    });

    setRollPoints((prevPoints) => ({
      ...prevPoints,
      chance: sumDice(sortedRoll),
    }));

    if (/(.)\1{4}/.test(joinedRoll)) {
      console.log("Five of a Kind");
      setRollPoints((prevPoints) => ({
        ...prevPoints,
        [numToString[sortedRoll[0]]]: sumDice(sortedRoll),
        yahtzee: 50,
      }));
    }
    if (/(.)\1{3}/.test(joinedRoll)) {
      setRollPoints((prevPoints) => ({
        ...prevPoints,
        fourOAK: sumDice(sortedRoll),
      }));
    }
    if (
      /(.)\1{2}(.)\2|(.)\3(.)\4{2}/.test(joinedRoll) &&
      !/(.)\1{4}/.test(joinedRoll)
    ) {
      setRollPoints((prevPoints) => ({
        ...prevPoints,
        fullHouse: 25,
      }));
    }
    if (/(.)\1{2}/.test(joinedRoll)) {
      setRollPoints((prevPoints) => ({
        ...prevPoints,
        threeOAK: sumDice(sortedRoll),
      }));
    }
    if (/1234|2345|3456/.test(joinedRoll.replace(/(.)\1/, "$1"))) {
      setRollPoints((prevPoints) => ({
        ...prevPoints,
        smallS: 30,
      }));
    }
    if (/12345|23456/.test(joinedRoll.replace(/(.)\1/, "$1"))) {
      setRollPoints((prevPoints) => ({
        ...prevPoints,
        largeS: 40,
      }));
    }
  };

  useEffect(() => {
    calculatePoints(dice);
  }, [dice]);

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

  function rollDice() {
    if (rollsLeft) {
      setRollPoints(rollPointsDefault);
      for (let k = 1; k <= dice.length; k++) {
        // Roll the dice that were not selected
        if (!dice[k - 1].selected) {
          let die = document.getElementById(`dice${k}`);

          // Get a random dice roll
          let diceRoll = Math.floor(Math.random() * 6 + 1);

          // Find the played die and update its rolled number
          const playedDie = dice.find(
            (item) => item.number === dice[k - 1].number
          );
          playedDie.roll = diceRoll;

          // Filter out the dice that were not rolled
          const filteredDice = dice.filter(
            (item) => item.number !== dice[k - 1].number
          );
          // Construct and update the dice state
          const newDice = [playedDie, ...filteredDice].sort(
            (a, b) => a?.number - b?.number
          );
          setDice(newDice);
          socket.emit("receiveRoll", newDice);

          // Animate the dice and show the side rolled
          for (let i = 1; i <= 6; i++) {
            die?.classList.remove("show-" + i);
            if (diceRoll === i) {
              die?.classList.add("show-" + i);
            }
          }
        }
      }
      // Update the remaining rolls to the state
      setRollsLeft((prevRolls) => prevRolls - 1);
    }
  }

  function resetGame() {
    setRollPoints(rollPointsDefault);
    setRollsLeft(maxRolls);
    setDice(diceDefault);
  }

  console.log(dice);

  console.log(rollPoints, rollPointsDefault);

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
            <div
              className={`opacity-${
                rollsLeft - 3
              } container flex justify-between`}
            >
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
        <button
          onClick={resetGame}
          className="bg-red-500 hover:bg-red-600 disabled:opacity-[0.4] text-white font-bold py-2 px-4 rounded w-[49%]"
        >
          Start all over!
        </button>
      </div>
    </div>
  );
}

export default App;
