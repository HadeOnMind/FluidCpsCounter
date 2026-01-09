"use client"; 

import { count } from "console";
import { useState, useEffect } from "react";



export default function ClickArea() {
    const [counter, setCounter] = useState(0);

    let userInterval = 10000
    let userPrepInterval = 1500

    //CONTADOR FISICO
    let [timeStarted, setTimeStart] = useState(false);

    //CPS MAIN
    let [counterStarted, setCounterStart] = useState(false);

    //PREPARATION TIMER
    let [timeLeft, setTimeLeft] = useState(userPrepInterval);

  const countClicks = () => {
    if (counterStarted) {
      setCounter(prev => {
        console.log(prev + 1);
        return prev + 1;
      });
    } else if (!counterStarted && timeLeft !== 0) {
      setCounter(0);
    }
  };

    
  useEffect(() => {
    if (!counterStarted) return;

    setTimeLeft(userPrepInterval);
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1);

      return () => clearInterval(timer);
    }, [counterStarted, userPrepInterval]);


    useEffect(() => {
      if (timeLeft === 0 && counterStarted) {
        setCounterStart(false);
        setCounter(0) // or setCounterStart(!counterStarted)
      }
    }, [timeLeft, counterStarted]);





  return (
    <div className="flex flex-col items-center gap-4 w-full">

      
      <div className="flex gap-2 bg-neutral-900/80 backdrop-blur px-3 py-2 rounded-xl shadow">
        <button 
        onClick={() => setCounterStart(!counterStarted)}
        className="px-3 py-1.5 rounded-md bg-neutral-700 hover:bg-neutral-600 text-sm"
        >


          {counterStarted ? "RESET" : "START"}


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

        {!counterStarted && "Click Me !!"}
        
        {counterStarted ? "Iniciando En: " + timeLeft : ""}


      </div>

    </div>
  );
}
