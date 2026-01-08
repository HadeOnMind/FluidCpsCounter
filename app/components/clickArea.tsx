import { useEffect } from "react";
import { useState } from "react";


export default function ClickArea() {
    let counter;
    let userInterval = 10000
    let [timeStart, setTimeStart] = useState(false);
    let [counterStart, setCounterStart] = useState(false);


    const MainTimer = () => {
        setInterval(() => {
            
        }, userInterval);
    }

  return (
    <div className="flex flex-col items-center gap-4 w-full">

      
      <div className="flex gap-2 bg-neutral-900/80 backdrop-blur px-3 py-2 rounded-xl shadow">
        <button className="px-3 py-1.5 rounded-md bg-neutral-700 hover:bg-neutral-600 text-sm">
          RESET
        </button>

        <div className="px-3 py-1.5 rounded-md bg-neutral-800 text-sm text-neutral-300">
          RESULTS
        </div>

        <button className="px-3 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-sm text-white">
          SAVE
        </button>
      </div>

      
      <div
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
        Click
      </div>

    </div>
  );
}
