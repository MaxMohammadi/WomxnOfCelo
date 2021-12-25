import React, { useEffect, useState } from "react";
import TimerCountItem from "./TimerCountItem";

import { calculateTimeLeft } from "./utils";
export default function Timer() {
  const today = Date.now();
  const dayX = new Date(Date.UTC(2022, 1, 1, 0, 0, 0)).getTime();
  const [timeLeft, setTimeLeft] = useState({
    hours: "0",
    days: "0",
    minutes: "0",
    seconds: "0",
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(dayX));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });
  return dayX < today ? (
    <p className="font-fright text-xl lg:text-4xl text-white pb-4 uppercase font-bold">
      Ready to Mint now!
    </p>
  ) : (
    <div className=" flex items-center  mb-4 lg:mb-6  relative ">
      <p className="text-white top-4 relative font-mont font-bold">
        Minting <br />
        Begins in:
      </p>
      <div className=" text-white  timer">
        <TimerCountItem time={timeLeft.days} text="Days" />
        <p className="timer-digits px-1 relative top-2 ">:</p>
        <TimerCountItem time={timeLeft.hours} text="Hours" />
        <p className="timer-digits px-1 relative top-2 ">:</p>
        <TimerCountItem time={timeLeft.minutes} text="Minutes" />
        <p className="timer-digits px-1 relative top-2">:</p>
        <TimerCountItem time={timeLeft.seconds} text="Seconds" />
      </div>
    </div>
  );
}
