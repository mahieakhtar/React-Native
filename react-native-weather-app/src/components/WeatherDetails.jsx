import React from "react";
import {
   StyleSheet,
   Text,
   View,
   Image,
} from "react-native";
 
export const WeatherDetails = ({weatherData}) => {
   const date = new Date(`${weatherData?.dt}` * 1000).toDateString();
   const IconUrl = `http://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@4x.png`;
  return (
    <>
       <View style={styles.headerText}>
          <Text style={styles.date}>{`${date}`}</Text>
          <Image style={styles.iconUrl} source={{ uri: IconUrl}}/>
          <Text style={styles.iconName}>{`${weatherData?.name}`}</Text>
          <Text style={styles.description}>{`${weatherData?.weather[0]?.description}`}</Text>
          <Text style={styles.tempInCelcius}>{`${Math.round(weatherData?.main?.temp-273.15)} °C`}</Text>
          <Text style={styles.maxMinTemp}>{`H : ${Math.round(weatherData?.main?.temp_max-273.15)} °C   `} 
                   {`L : ${Math.round(weatherData?.main?.temp_min-273.15)} °C`}</Text>
        </View>
    </>
  );
}; 
const styles = StyleSheet.create({
  headerText: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop:30,
    paddingBottom: 265,
  },
  date:{
    color:"white",
    paddingBottom:20
  },
  iconUrl: {
    width: 250,
    height: 130,
    alignItems: "center",
  },
  iconName: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Optima",
  },
  description: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Optima",
  },
  tempInCelcius: {
    color: "white",
    fontSize: 70,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Optima",
  },
  maxMinTemp:{
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Optima",
  }
 });



