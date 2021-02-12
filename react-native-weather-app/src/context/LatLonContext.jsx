import { createContext } from "react";

export const LatLonContext = createContext({
  lat: null,
  lon: null,
  setLat: () => {
    console.log("latitude")
  },
  setLon: () => {
    console.log("longitude")
  }
});