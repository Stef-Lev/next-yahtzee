function App() {
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
            <div className="dice-container flex justify-between">
              <div className="dice face-one">
                <span className="dot"></span>
              </div>

              <div className="dice face-two">
                <span className="dot"></span>
                <span className="dot"></span>
              </div>

              <div className="dice face-three">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>

              <div className="face-four dice">
                <div className="column">
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <div className="column">
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <div className="face-five dice">
                <div className="column">
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>

                <div className="column">
                  <span className="dot"></span>
                </div>

                <div className="column">
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <div className="face-six dice">
                <div className="column">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <div className="column">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-[20px] h-[60%]"></div>
      </div>
    </div>
  );
}

export default App;
