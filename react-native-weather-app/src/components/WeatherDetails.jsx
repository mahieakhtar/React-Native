import React from "react";
import {
   StyleSheet,
   Text,
   View,
   Image,
} from "react-native";
 
export const WeatherDetails = ({weatherData,iconUrl,description}) => {
  return (
    <>
       <View style={styles.headerText}>
          <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
          <Text style={styles.textDetailsBold}>{`${weatherData?.name}`}</Text>
          <Text style={styles.textDetails}>{`${description}`}</Text>
          <Text style={styles.textDetailCelcius}>{`${Math.round(weatherData?.main?.temp-273.15)} °C`}</Text>
          <Text style={styles.textDetails}>{`H : ${Math.round(weatherData?.main?.temp_max-273.15)} °C   `} 
                   {`L : ${Math.round(weatherData?.main?.temp_min-273.15)} °C`}</Text>
        </View>
    </>
  );
}; 
const styles = StyleSheet.create({
  headerText: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 300,
  },
  weatherIcon: {
    width: 300,
    height: 150,
    alignItems: "center",
  },
  textDetailsBold: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Optima",
  },
textDetails: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Optima",
  },
  textDetailCelcius: {
    color: "white",
    fontSize: 70,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Optima",
  },
 });



