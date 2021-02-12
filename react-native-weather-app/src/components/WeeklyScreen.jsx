import React, { useState, useEffect, useContext,useCallback } from "react";
import {
  StyleSheet,
  ImageBackground,
} from "react-native";
import { WeeklyScreenDetails } from "./WeeklyScreenDetails"
import { forecastFor7days } from "../services/index";
import { LatLonContext } from "../context/LatLonContext"

export const WeeklyScreen = () => {
  const { lat, lon } = useContext(LatLonContext);
  const [weatherData, setWeatherData] = useState();

  const UpdateWeeklyData = useCallback(async () => {
    try {
      const response = await forecastFor7days(lat, lon);
      setWeatherData(response);
    } catch (error) {
      console.log(error);
    }
  }, [lat, lon]);

useEffect(() => {
  UpdateWeeklyData();
}, []);
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../assets/bg.jpg")}>
      <WeeklyScreenDetails weatherData={weatherData}/>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});
