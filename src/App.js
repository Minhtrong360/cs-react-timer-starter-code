import React from "react";
import useTimer from "./useTimer";

function App() {
  const { renderTime, startTimer, stopTimer, resetTimer, lap, split, active } =
    useTimer();

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{renderTime}</p>
          <ul>
            {split.current.map((item) => (
              <li className="lapItem">{item}</li>
            ))}
          </ul>
        </div>

        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
          <button className="button" onClick={lap}>
            Lap
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
