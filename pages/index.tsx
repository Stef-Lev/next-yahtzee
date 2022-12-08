import Dice from "../components/dice";

function App() {
  const diceNames = [
    { number: 1, string: "one" },
    { number: 2, string: "two" },
    { number: 3, string: "three" },
    { number: 4, string: "four" },
    { number: 5, string: "five" },
    { number: 6, string: "six" },
  ];

  function rollDice() {
    for (let k = 1; k <= diceNames.length; k++) {
      let dice = document.getElementById(`dice${k}`);
      let diceRoll = Math.floor(Math.random() * 6 + 1);
      console.log("diceRoll", diceRoll);
      for (let i = 1; i <= 6; i++) {
        dice.classList.remove("show-" + i);
        if (diceRoll === i) {
          dice.classList.add("show-" + i);
        }
      }
    }
  }

  return (
    <div className="App flex flex-col justify-center items-center">
      <div
        className="
      rounded-lg 
      w-full md:w-3/4 xl:w-3/5
      h-full md:h-[85%] 
      bg-basic-white"
      >
        <div className="md:rounded-t-lg bg-gradient-to-r from-teal-blue to-teal-dark h-[40%] xs:p-[12px] md:p-[20px]">
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
        <div id="roll" className="roll-button">
          <button onClick={rollDice}>Roll dice!</button>
        </div>
        <div className="p-[20px] h-[60%]"></div>
      </div>
    </div>
  );
}

export default App;
