"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);
  const [timers, setTimers] = useState("");

  let end = new Date("8/30/2024");
  let countDownTime = end.getTime() - Date.now();

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
      getFormattedTime(countDownTime);
    }, 1000);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    let totalSeconds = parseInt(Math.floor(milliseconds / 1000));
    let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
    let totalHours = parseInt(Math.floor(totalMinutes / 60));
    let days = parseInt(Math.floor(totalHours / 24));

    let seconds = parseInt(totalSeconds % 60);
    let minutes = parseInt(totalMinutes % 60);
    let hours = parseInt(totalHours % 24);

    setTimers(`${days} : ${hours} : ${minutes} : ${seconds}`);
  };

  return (
    <section className="bg-slate-400 p-11">
      <section>
        <section>
          <div>{timers}</div>
        </section>
        {/* <Link href="/">
          <div className="text-white mt-3 bg-black flex items-center justify-between rounded-lg py-[5px] px-3 w-[120px] lg:w-[150px] 2xl:w-[200px]">
            <button className="pb-1.5 lg:text-xl  2xl:text-2xl capitalize">
              view all products
            </button>
            <span>
              <FaArrowRightLong />
            </span>
          </div>
        </Link> */}
      </section>
    </section>
  );
};

export default Timer;

{
  /* <h2>deals of the month</h2>
        <p>
          it is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. the point of
          using lorem ipsum is that it has a more-or-less normal distribution of
          letters.
        </p> */
}
