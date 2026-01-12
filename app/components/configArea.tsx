"use client";

import { stringify } from "querystring";
import { useCps } from "../context/CpsContext";
import { useState } from "react";

export default function ConfigArea() {
  const {
    prepTime,
    testTime,
    setPrepTime,
    setTestTime,
    phase,
    color,
    setColor,
    size,
    setSize,
  } = useCps();

  const disabled = phase !== "idle" && phase !== "finished"

  const [selectedColor, setSelectedColor] = useState(null);
  const colors = ["BLUE", "RED", "YELLOW"];
  const colorsBG = ["bg-blue-700", "bg-red-600", "bg-yellow-500"];

  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["SMALL", "MEDIUM", "BIG"];
  const sizeCode = ["w-[280px] h-[120px]", "w-[420px] h-[260px]", "w-[620px] h-[460px]"];



  return (
    <div className="w-[280px] bg-neutral-900 rounded-xl p-4 flex flex-col gap-6 shadow-lg">

      
      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold text-neutral-200 border-b border-neutral-700 pb-1">
          TIME CONFIG
        </h2>

        <label className="flex flex-col gap-1 text-sm text-neutral-400">
          Preparation time (seconds)
          <input
            type="number"
            min={0}
            value={prepTime}
            disabled={disabled}
            onChange={(e) => setPrepTime(Number(e.target.value))}
            className="bg-neutral-800 text-neutral-200 rounded-md px-2 py-1 disabled:opacity-40"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm text-neutral-400">
          Test time (seconds)
          <input
            type="number"
            min={1}
            value={testTime}
            disabled={disabled}
            onChange={(e) => setTestTime(Number(e.target.value))}
            className="bg-neutral-800 text-neutral-200 rounded-md px-2 py-1 disabled:opacity-40"
          />
        </label>
      </div>

      
      <div className="flex flex-col gap-2 opacity-40">
        <h2 className="text-sm font-semibold text-neutral-200 border-b border-neutral-700 pb-1">
          COLORS CONFIG
        </h2>

        <ul className="space-y-1">
          {colors.map((c, i) => (
            <li
              key={c}
              onClick={() => {
                if (!disabled)   {
                  setColor(colorsBG[i]);
                }
              }}
              className={`
                cursor-pointer
                text-sm
                ${disabled ? "opacity-40 cursor-not-allowed" : ""}
                ${color === c ? "text-emerald-400 font-semibold" : "text-neutral-400"}
              `}
            >
              {c}
            </li>
          ))}
        </ul>

        <p className="text-xs text-neutral-500">
          Selected: <span className="text-neutral-300">{color}</span>
        </p>
      </div>

      <div className="flex flex-col gap-2 opacity-40">
        <h2 className="text-sm font-semibold text-neutral-200 border-b border-neutral-700 pb-1">
          AREA CONFIG
        </h2>
        <ul className="space-y-1">
          {sizes.map((s, i) => (
            <li
              key={s}
              onClick={() => {
                if (!disabled)   {
                  setSize(sizeCode[i]);
                }
              }}
              className={`
                cursor-pointer
                text-sm
                ${disabled ? "opacity-40 cursor-not-allowed" : ""}
                ${size === s ? "text-emerald-400 font-semibold" : "text-neutral-400"}
              `}
            >
              {s}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
