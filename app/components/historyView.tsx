"use client";

import { useCps } from "../context/CpsContext";

export default function HistoryView() {

  const { 
    historyViewArray, 
    result,
    testTime,
    prepTime,

  } = useCps();

  const promedium = historyViewArray.length > 0
    ? historyViewArray.reduce((sum: any, item: any) => sum + item.result, 0) / historyViewArray.length
    : 0;





  return (
    <div className="h-full bg-neutral-900 rounded-xl p-4 shadow-lg flex flex-col">

      <h2 className="text-sm font-semibold text-neutral-200 mb-3 items-center justify-center text-center">
        History
      </h2>
      

      <div className="flex-1 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-neutral-700">
        <ul className="space-y-2">
          {historyViewArray.map((item: any) => (
            <li 
              key={item.id} 
              className="grid grid-cols-3 gap-4 text-sm text-neutral-400 bg-neutral-800 rounded-lg p-3" 
            >
                
                <span>Attemp: {item.id}</span>
                <span>Result: {item.result.toFixed(2)}</span>
                <span>Test Time: {item.testTime.toFixed(2)}</span>
                
              
            </li>
          ))}
        </ul>
      </div>


        <div className="m-4 p-3 bg-neutral-800 rounded-lg">
          <h2 className="text-sm font-semibold text-neutral-200">Average CPS</h2>
          <div className="text-xl font-bold text-emerald-400">
            {promedium.toFixed(3)}
          </div>
        </div>
    </div>
  );
}
