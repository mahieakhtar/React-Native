import React, { useState, useEffect, useCallback } from "react";
import {
   StyleSheet,
   View,
   TextInput,
  ImageBackground,
} from "react-native";
 import { getWeatherByCityName } from "../services/index";
 import { MaterialIcons } from "@expo/vector-icons";
import { WeatherInfo } from "./WeatherInfo";
import {WeatherDetails}from "./WeatherDetails"

export const HomeScreen = ({navigation}) => {
  const [currentCity, setCurrentCity] = useState("copenhagen");
  const [weatherData, setWeatherData] = useState();
   const [icon, setIcon] = useState();
   const [description, setDescription] = useState();
  
  const UpdateCity = useCallback(async () => {
      try {
        const response = await getWeatherByCityName(currentCity);
        setIcon(response.weather[0].icon);
        setDescription(response.weather[0].main);
        setWeatherData(response);
      } catch (error) {
        console.log(error);
      }
    }, [currentCity]);

  useEffect(() => {
    UpdateCity();
  }, []);
   const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <>
       <ImageBackground
          style={styles.ImageBackground} 
          source={require("../../assets/bg.jpg")}>
      <View style={styles.header}>
          <MaterialIcons
            style={styles.icon}
            name="menu"
            size={30}
            onPress={() => navigation.openDrawer()}
          />
          <TextInput
            placeholder={"Search ..."}
            onChangeText={setCurrentCity}
          />
          <MaterialIcons 
          style={styles.search}
          name="search" 
          size={30}  
          onPress={UpdateCity}/>
        </View>
        <WeatherDetails 
        weatherData={weatherData}
        description={description}
        iconUrl={iconUrl}
        />
      </ImageBackground>
       <WeatherInfo weatherData={weatherData}/>
    </>
  );
}; 

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-end",
    height:"90%"
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    left: 20,
  },
  search: {
    position: "absolute",
    right: 20,
  },
 });



