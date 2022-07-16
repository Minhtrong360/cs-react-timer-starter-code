import { useState, useRef } from "react";
import { formatTime } from "./formatTime";

const useTimer = () => {
  let time = 0;
  const [renderTime, setRenderTime] = useState(formatTime(time));
  let offset;

  let isStart = false;
  let count;
  const active = useRef();

  function update() {
    if (isStart === true) {
      console.log("isStart is true");
      time += delta();
    }
    console.log("time after Updated", time);
    setRenderTime(formatTime(time));
  }
  function delta() {
    var now = Date.now();
    var timePassed = now - offset;
    offset = now;
    return timePassed;
  }
  const startTimer = () => {
    console.log("start");
    count = setInterval(update, 1000);
    offset = Date.now();
    isStart = true;
    active.current.disabled = true;
  };
  const stopTimer = () => {
    console.log("stop");
    clearInterval(count);
    count = null;
    isStart = false;
    active.current.disabled = false;
  };
  const resetTimer = () => {
    time = 0;
    count = null;
    isStart = false;
    update();
    active.current.disabled = false;
  };

  return { renderTime, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
