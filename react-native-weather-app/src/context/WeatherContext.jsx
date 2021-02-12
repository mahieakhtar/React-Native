import { createContext } from "react";

export const WeatherContext = createContext({
  currentCity: "",
  setCurrentCity: () => {
    console.log("city");
  }
});