"use client"; 

import { count } from "console";
import { useState, useEffect } from "react";



export default function ClickArea() {
  
    let userInterval = 10
    let userPrepInterval = 3
    
    type Phase = "idle" | "preparing" | "running" | "finished";

    const [phase, setPhase] = useState<"idle" | "preparing" | "running" | "finished">("idle");
    const [prepTimeLeft, setPrepTimeLeft] = useState(userPrepInterval);
    const [timeLeft, setTimeLeft] = useState(userInterval);
    const [counter, setCounter] = useState(0);
    const [result, setResult] = useState<number | null>(null);

    


    const countClicks = () => {
      if (phase === "running") {
        setCounter(prev => prev + 1);
      }
    };
    


  const startTest  = () => {
    setPhase("preparing");
    setCounter(0);
    setTimeLeft(userInterval);
    setResult(null);
  }


  useEffect(() => {
    if (phase !== "preparing") return;
  
    const timer = setInterval(() => {
      setPrepTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setPhase("running");
          setTimeLeft(userInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  
    return () => clearInterval(timer);
  }, [phase, userPrepInterval]);
  





  useEffect(() => {
    if (phase !== "running") return;
  
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setPhase("finished");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  
    return () => clearInterval(timer);
  }, [phase]);
  
  useEffect(() => {
    if (phase === "finished") {
      setResult(counter / userInterval);
    }
  }, [phase, counter]);


  const reset = () => {
    setPhase("idle");
    setCounter(0);
    setTimeLeft(userInterval);
    setPrepTimeLeft(userPrepInterval);
    setResult(null);
  };

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
        className="
          w-[420px] h-[260px]
          flex items-center justify-center
          rounded-2xl
          bg-neutral-900
          border border-neutral-700
          text-2xl font-semibold
          select-none cursor-pointer
          active:scale-[0.98]
          transition
        "
      >

        {phase === "idle" && "Click START"}
        {phase === "preparing" && `Starting in ${prepTimeLeft}`}
        {phase === "running" && `Time left: ${timeLeft}s`}
        {phase === "finished" && `CPS: ${result?.toFixed(2)}`}

      </div>

    </div>
  );
}
