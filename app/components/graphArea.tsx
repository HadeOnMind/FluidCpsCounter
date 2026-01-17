"use client"; 

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useCps } from "../context/CpsContext";
import { HistoryItem } from "./HistoryInterface";


export default function graphArea () {

    const data = [ { attempt: 1, cps: 5 }, { attempt: 2, cps: 7 }, { attempt: 3, cps: 6 }, { attempt: 4, cps: 8 }, { attempt: 5, cps: 9 }, ];

    const { 
        historyViewArray, 
        result,
        testTime,
        prepTime,
    
      } = useCps();

    interface ChartPoint { attempt: number; cps: number; }

    const chartData: ChartPoint[] = historyViewArray.map((item: HistoryItem, index: number) => ({
      attempt: index + 1,
      cps: item.result,
    }));


    return (

    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <XAxis dataKey="attempt" />
          <YAxis hide />
          <Tooltip />
          <Line type="monotone" dataKey="cps" stroke="#8884d8" strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>

    )
}