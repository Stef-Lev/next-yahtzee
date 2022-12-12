import React from "react";
import Dice from "../components/Dice";

function App() {
  const diceNames = [
    { number: 1, string: "one", selected: false },
    { number: 2, string: "two", selected: false },
    { number: 3, string: "three", selected: false },
    { number: 4, string: "four", selected: false },
    { number: 5, string: "five", selected: false },
  ];

  function rollDice() {
    for (let k = 1; k <= diceNames.length; k++) {
      let dice = document.getElementById(`dice${k}`);
      let diceRoll = Math.floor(Math.random() * 5 + 1);
      console.log(`dice: ${k} - roll: ${diceRoll}`);
      for (let i = 1; i <= 5; i++) {
        dice?.classList.remove("show-" + i);
        if (diceRoll === i) {
          dice?.classList.add("show-" + i);
        }
      }
    }
  }

  return (
    <div className="App flex flex-col justify-center items-center">
      <div
        className="
      rounded-lg 
      w-full lg:w-5/6 xl:w-3/5
      h-full md:h-[85%] 
      bg-basic-white"
      >
        <div className="md:rounded-t-lg bg-gradient-to-r from-teal-blue to-teal-dark xs:p-[12px] md:p-[20px] lg:p-[50px]">
          <h1>Yahtzee!</h1>
          <div className="flex justify-center items-center my-10">
            <div className="container flex justify-between">
              {diceNames.map((dice) => (
                <div key={dice.number} className="dice-container">
                  <Dice nameN={dice.number} nameS={dice.string} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="roll" className="roll-button mt-5">
          <button
            onClick={rollDice}
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
          >
            Roll dice!
          </button>
        </div>
        <div className="p-[20px] h-[60%]"></div>
        {/* <img src="/dice-sides/five.svg" /> */}
      </div>
    </div>
  );
}

export default App;
