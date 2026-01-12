"use client"; 

import { count } from "console";
import { useState, useEffect } from "react";
import { useCps } from "../context/CpsContext";




export default function ClickArea() {
    
  const {
    phase,
    counter,
    prepTime,
    timeLeft,
    result,
    startTest,
    reset,
    countClicks,
    color,
    size,
  } = useCps();


  


    
  return (
    <div className="flex flex-col items-center gap-4 w-full">

      
      <div className="flex gap-2 bg-neutral-900/80 backdrop-blur px-3 py-2 rounded-xl shadow">
        <button

          onClick={() => {
            if (phase === "running" || phase === "preparing") {
              reset();
            } else {
              startTest();
            }
          }}

          className="px-3 py-1.5 rounded-md bg-neutral-700 hover:bg-neutral-600 text-sm"
        >
          {phase === "running" || phase === "preparing" ? "RESET" : "START"}
      
        </button>


        <div className="px-3 py-1.5 rounded-md bg-neutral-800 text-sm text-neutral-300">
          {counter == 0 ? "RESULT" : counter}
        </div>

        <button className="px-3 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-sm text-white">
          SAVE
        </button>
      </div>

      
      <div
        onClick={countClicks}
        className={`
          ${size}
          flex items-center justify-center
          rounded-2xl
          ${color}
          border border-neutral-700
          text-2xl font-semibold
          select-none cursor-pointer
          active:scale-[0.98]
          transition
        `}
      >

        {phase === "idle" && "Click START"}
        {phase === "preparing" && `Starting in ${prepTime}`}
        {phase === "running" && `Time left: ${timeLeft}s`}
        {phase === "finished" && `CPS: ${result?.toFixed(2)}`}

      </div>

    </div>
  );
}
