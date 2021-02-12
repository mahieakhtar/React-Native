import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";

export const WeeklyScreenDetails = ({weatherData}) => {
  return (
    <>
    <SafeAreaView>
        <Text
          style={{
            fontSize: 30,
            fontWeight:"bold",
            color: "orange",
            marginLeft:80,
            marginBottom:20,
          }}>{`${weatherData?.timezone}`}</Text>
         <ScrollView>
        {weatherData?.daily &&
            weatherData?.daily?.map((item, index) => {
              return (
                <View style={styles.container} key={index}>
                  <Text style={styles.item}>
                    {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                      weekday: "long",
                    })}
                  </Text>
                  <Image
                    style={styles.icon}
                    source={{
                      uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`,
                    }}
                  />
                  <Text style={styles.temp}>
                    {(item.temp.max - 273.15).toFixed(0)}
                  </Text>
                  <Text style={styles.temp}>
                    {(item.temp.min - 273.15).toFixed(0)}
                  </Text>
                  </View>
              );
            })}
        </ScrollView>
        </SafeAreaView> 
    </>
  )}
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    marginTop: 'auto',
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    padding: 30,
  },
  item: {
    flex: 0.8,
    fontSize: 18,
    textAlign: "left",
    color: "white",
  },
  icon: {
    flex: 0.3,
  },
  temp: {
    flex: 0.6,
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
});


