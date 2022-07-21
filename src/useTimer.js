import { useState, useRef } from "react";
import { formatTime } from "./formatTime";

const useTimer = () => {
  let time = useRef(0);
  const [renderTime, setRenderTime] = useState(formatTime(time.current));
  let offset;
  let split = useRef([]);
  let isStart = useRef(false);
  let count = useRef();
  const active = useRef();

  function update() {
    if (isStart.current === true) {
      time.current += delta();
    }
    setRenderTime(formatTime(time.current));
  }
  function delta() {
    var now = Date.now();
    var timePassed = now - offset;
    offset = now;
    return timePassed;
  }
  const startTimer = () => {
    console.log("start");
    isStart.current = true;
    count.current = setInterval(update, 1000);
    offset = Date.now();
    active.current.disabled = true;
  };
  const stopTimer = () => {
    console.log("stop");
    clearInterval(count.current);
    count.current = null;
    isStart.current = false;
    active.current.disabled = false;
  };
  const resetTimer = () => {
    time.current = 0;
    clearInterval(count.current);
    count.current = null;
    isStart.current = false;
    split.current = [];
    update();
    active.current.disabled = false;
  };
  const lap = () => {
    if (isStart.current) {
      split.current.push(renderTime);
      return split;
    } else return;
  };

  return { renderTime, startTimer, stopTimer, resetTimer, lap, split, active };
};
export default useTimer;
