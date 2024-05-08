"use client";
import Link from "next/link";
import Image from "next/image";
import "@/styles/components/Timer.scss";
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
    <section className="boxMonth m-11 gap-2">
      <section className="boxRight gap-5">
        <section className="texts gap-3">
          <h2 className="font-bold text-xl xl:text-2xl">deals of the month</h2>
          <p className="xl:text-lg">
            it is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. the point
            of using lorem ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>
          <div className="timer text-xl font-bold">{timers}</div>
        </section>
        <Link href="/">
          <div className="boxBtn py-3 px-3">
            <button className="pb-1.5 lg:text-xl  2xl:text-2xl capitalize">
              view all products
            </button>
            <span>
              <FaArrowRightLong />
            </span>
          </div>
        </Link>
      </section>
      <div className="max-sm:hidden w-[40%]">
        <Image
          src="/1.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%" }}
        />
      </div>
    </section>
  );
};

export default Timer;
