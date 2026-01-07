"use client"; 

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function graphArea () {

    const data = [ { attempt: 1, cps: 5 }, { attempt: 2, cps: 7 }, { attempt: 3, cps: 6 }, { attempt: 4, cps: 8 }, { attempt: 5, cps: 9 }, ];


    return (

    <div style={{ width: "100%", height: 150 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="attempt" hide />
          <YAxis hide />
          <Tooltip />
          <Line type="monotone" dataKey="cps" stroke="#8884d8" strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>

    )
}