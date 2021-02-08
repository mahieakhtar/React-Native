import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export const WeatherInfo = ({ weatherData }) => {
  return (
    <View style={styles.weatherContainer}>
      <View style={styles.row}>
        <Feather name="thermometer" size={24} color="purple" />
        <View style={styles.column}>
          <Text>Feels Like</Text>
          <Text style={styles.text}>
            {`${Math.round(weatherData?.main?.feels_like - 273.15)}`}
          </Text>
        </View>
        <Feather name="wind" size={24} color="purple" />
        <View style={styles.items}>
          <Text>Wind</Text>
          <Text style={styles.text}>
            {`${weatherData?.wind?.speed} m/s`}
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <Feather name="droplet" size={24} color="purple" />
        <View style={styles.column}>
          <Text>Humidity</Text>
          <Text style={styles.text}>
            {`${weatherData?.main?.humidity} %`}
          </Text>
        </View>
        <Feather name="compass" size={24} color="purple" />
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
    paddingBottom: 60,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  column: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: 230,
  },
  text: {
    fontSize: 15,
    color: "purple",
    fontWeight: "700",
    margin: 7,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  items: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: 300,
  },
});
