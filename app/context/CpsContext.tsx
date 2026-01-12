"use client";

import { createContext, useContext } from "react";

export const CpsContext = createContext<any>(null);

export function useCps() {
  const ctx = useContext(CpsContext);
  if (!ctx) {
    throw new Error("useCps must be used inside CpsController");
  }
  return ctx;
}
