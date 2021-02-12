import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export const WeatherInfo = ({ weatherData }) => {
  return (
    <View style={styles.weatherContainer}>
      <View style={styles.row}>
        <Feather name="thermometer" size={35} color="purple" />
        <View style={styles.column}>
          <Text>Feels Like</Text>
          <Text style={styles.text}>
            {`${Math.round(weatherData?.main?.feels_like - 273.15)} °C`}
          </Text>
        </View>
        <Feather name="wind" size={35} color="purple" />
        <View style={styles.items}>
          <Text>Wind</Text>
          <Text style={styles.text}>
            {`${weatherData?.wind?.speed} m/s`}
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <Feather name="droplet" size={35} color="purple" />
        <View style={styles.column}>
          <Text>Humidity</Text>
          <Text style={styles.text}>
            {`${weatherData?.main?.humidity} %`}
          </Text>
        </View>
        <Feather name="compass" size={35} color="purple" />
        <View style={styles.items}>
          <Text>Pressure</Text>
          <Text style={styles.text}>
            {`${weatherData?.main?.pressure} hPa`}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  weatherContainer: {
    margin:"auto",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth:.5,
    borderColor:"white"
  },
  column: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: 200,
  },
  text: {
    fontSize: 20,
    color: "purple",
    fontWeight: "700",
    margin: 5,
    fontFamily: "Optima",
  },
  items: {
    paddingBottom: 10,
  },
});
