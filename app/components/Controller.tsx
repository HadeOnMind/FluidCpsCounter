"use client";

import { useState, useEffect } from "react";
import { CpsContext } from "../context/CpsContext";
import test from "node:test";

export default function CpsController({ children }: { children: React.ReactNode })

 {

    type phase = "idle" | "preparing" | "running" | "finished";
    const [phase, setPhase] = useState<"idle" | "preparing" | "running" | "finished">("idle")
    const DEFAULT_TEST_TIME = 10;
    const DEFAULT_PREP_TIME = 3;
    const [prepTime, setPrepTime] = useState(DEFAULT_PREP_TIME);
    const [testTime, setTestTime] = useState(DEFAULT_TEST_TIME);
    const [timeLeft, setTimeLeft] = useState(DEFAULT_TEST_TIME);
    const [counter, setCounter] = useState(0)
    const [result, setResult] = useState<number|null>(null)
    const [color, setColor] = useState(String)
    const [size, setSize] = useState(String)

    let [historyViewArray, setHistoryViewArray ] = useState([]);

    
        const countClicks = () => {
          if (phase === "running") {
            setCounter(prev => prev + 1);
          }
        };
        
    
    
      const startTest  = () => {
        setPhase("preparing");
        setCounter(0);
        setTimeLeft(testTime);
        setResult(null);
      }
    
    
      useEffect(() => {
        if (phase !== "preparing") return;
      
        const timer = setInterval(() => {
          setPrepTime(prev => {
            if (prev <= 1) {
              clearInterval(timer);
              setPhase("running");
              setTimeLeft(testTime);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      
        return () => clearInterval(timer);
      }, [phase, prepTime]);
      
    
    
    
    
    
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
          setResult(counter / testTime);
        }
      }, [phase, counter]);
    
    
      const reset = () => {
        setPhase("idle");
        setCounter(0);
        setTimeLeft(testTime);
        setPrepTime(prepTime);
        setResult(null);
      };
    



    return (
        <CpsContext.Provider
            value={{
            
            phase,
            prepTime,
            testTime,
            counter,
            timeLeft,
            result,
            historyViewArray,
            color,
            size,

            
            setPrepTime,
            setTestTime,
            startTest,
            reset,
            countClicks,
            setHistoryViewArray,
            setColor,
            setSize
            }}
        >
            {children}
        </CpsContext.Provider>
    );

}