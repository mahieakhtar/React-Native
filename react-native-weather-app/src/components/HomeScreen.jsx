import React, { useContext,useState, useEffect, useCallback } from "react";
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
 import { WeatherContext } from "../context/WeatherContext";
 import { LatLonContext } from "../context/LatLonContext";

export const HomeScreen = ({navigation}) => {
  const {currentCity, setCurrentCity} = useContext(WeatherContext);
  const { setLat, setLon } = useContext(LatLonContext);
  const [weatherData, setWeatherData] = useState(null);
  
   const UpdateCity = useCallback(async () => {
      try {
        const response = await getWeatherByCityName(currentCity);
        setLat(response.coord.lat);
        setLon(response.coord.lon);
        setWeatherData(response);
      } catch (error) {
        console.log(error);
      }
    }, [currentCity]);

  useEffect(() => {
    UpdateCity();
  }, []);
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



