/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import logo from "./logo.png";
import { useState, useEffect } from "react";

export default function Home() {
  const [start, setStart] = useState<undefined | Date>(undefined);
  const [timeLeft, setTimeLeft] = useState(25 * 1000); // Time left in ms (25 seconds)
  const [progress, setProgress] = useState(0); // Progress percentage

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (start) {
      interval = setInterval(() => {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - start.getTime();
        const timeInCurrentCycle = elapsedTime % (25 * 1000);
        const remainingTime = 25 * 1000 - timeInCurrentCycle;

        setTimeLeft(remainingTime);
        setProgress((timeInCurrentCycle / (25 * 1000)) * 100);
      }, 1000);
    } else {
      setTimeLeft(25 * 1000); // Reset time left to 25 seconds
      setProgress(0); // Reset progress to 0
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [start]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-screen-sm mx-auto">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image src={logo} alt="Deadlock logo" priority className="w-80" />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">Start the timer when the game start.</li>
          <li>See when creeps are going to spawn in real time.</li>
        </ol>

        <div className="mt-20 flex flex-col gap-4 items-start w-full">
          <h1 className="text-5xl font-bold">
            {start
              ? `Next spawn ${Math.ceil(timeLeft / 1000)}s`
              : "Start the timer"}
          </h1>
          <div className="relative w-full h-12 rounded-lg bg-[#a89e8854] overflow-hidden flex">
            <div
              className="h-full w-full bg-foreground duration-1000 transition-transform origin-left"
              style={{ transform: `scaleX(${progress / 100})` }}
            ></div>
          </div>
          <div className="flex gap-4 items-center flex-wrap">
            <button
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:opacity-90 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              onClick={() => {
                if (!start) setStart(new Date());
                else setStart(undefined);
              }}
            >
              {start ? "Stop" : "Start"}
            </button>
            <button
              className="rounded-full border border-solid border-foreground transition-colors flex items-center justify-center hover:bg-foreground hover:text-background text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              onClick={() => {
                setStart(new Date());
                setTimeLeft(25 * 1000);
                setProgress(0);
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="absolute hidden lg:flex left-0 top-0 bottom-0 w-40 bg-[#a89e8854] items-center justify-end m-8 rounded-lg overflow-hidden">
          <div
            className="h-full w-full bg-foreground duration-1000 transition-transform origin-top"
            style={{ transform: `scaley(${progress / 100})` }}
          ></div>
          <h1 className="absolute w-full h-full flex items-center justify-center text-5xl font-bold text-background">
            {Math.ceil(timeLeft / 1000)}
          </h1>
        </div>
        <div className="absolute hidden lg:flex right-0 top-0 bottom-0 w-40 bg-[#a89e8854] items-center justify-end m-8 rounded-lg overflow-hidden">
          <div
            className="h-full w-full bg-foreground duration-1000 transition-transform origin-top"
            style={{ transform: `scaley(${progress / 100})` }}
          ></div>
          <h1 className="absolute w-full h-full flex items-center justify-center text-5xl font-bold text-background">
            {Math.ceil(timeLeft / 1000)}
          </h1>
        </div>
      </main>

      <a
        className="absolute bottom-0 w-full flex items-center justify-center gap-1 p-8 text-sm text-center sm:text-left opacity-40 hover:opacity-100"
        href="https://codya.dev"
        target="_blank"
      >
        made by <span className="font-bold">Cody Adam</span>{" "}
      </a>
    </div>
  );
}
