import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
 
} from "react-native";
import { getWeatherByCityName } from "../services/index";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export const HomeScreen = ({ navigation }) => {
  const [currentCity, setCurrentCity] = useState("copenhagen");
  const [weatherData, setWeatherData] = useState();
  const [icon, setIcon] = useState();
  const [description, setDescription] = useState();
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();

   function timeConverter(tempTime) {
        var time = tempTime *1000;
        var d = new Date(time);
        var hours = d.getHours();
        if (hours>=12){                 //Adding endings
                var suffix = "P.M.";}
            else{
                suffix = "A.M.";}
        var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();

        hours = this.removeMilitary(hours);

        var formattedTime = hours + ":" + minutes + " " + suffix;

        return formattedTime;
    }

  const refreshForTheCity = useCallback(async () => {
    try {
      const response = await getWeatherByCityName(currentCity);
      setIcon(response.weather[0].icon);
      setDescription(response.weather[0].main);
      setSunrise(response.sys.sunrise);
      setSunset(response.sys.sunset);
      console.log('respone' +response.weather[0].icon);
      setWeatherData(response);
    } catch (error) {
      console.log(error);
    }
  }, [currentCity]);

  useEffect(() => {
    refreshForTheCity();
  }, []);

  console.log(weatherData);


  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  console.log("iconUrl" + iconUrl);


  
  return (
    <>
      <ImageBackground
      style={styles.ImageBackground}
        source={require("../../assets/bg.jpg")}
      >
        <View style={styles.header}>
          <MaterialIcons
            name="menu"
            onPress={() => navigation.openDrawer()}
            size={30}
            style={styles.icon}
          />
          {/* <MaterialIcons name="search" size={30} style={styles.search} onPress={refreshForTheCity}/> */}
          <TextInput
            placeholder={"Search ..."}
            onChangeText={setCurrentCity}
          />
          <MaterialIcons name="search" size={30} style={styles.search} onPress={refreshForTheCity}/>
        </View>

        {/* Input Text  */}
        <View style={styles.headerText}>
          <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
          <Text style={styles.textDetailsBold}>{`${weatherData?.name}`}</Text>
          <Text style={styles.textDetails}>{`${description}`}</Text>
          <Text style={styles.textDetailCelcius}>{`${Math.round(weatherData?.main?.temp-273.15)} °C`}</Text>
          <Text style={styles.textDetails}>{`H : ${Math.round(weatherData?.main?.temp_max-273.15)} °C   `} 
                   {`L : ${Math.round(weatherData?.main?.temp_min-273.15)} °C`}</Text>
          {/* <Text style={styles.textDetails}>{`${new Date((weatherData?.dt + weatherData?.timezone) * 1000)
            .getHours()}`}</Text> 
          <Text style={styles.textDetails}>{`Sunrise : ${timeConverter(sunrise)}`}</Text> 
          <Text style={styles.textDetails}>{`Sunset : ${sunset}`}</Text>           */}
         
        </View>
      </ImageBackground>

        <View style={styles.weatherDetailContainer}>
          <View style={styles.weatherDetailsRow}>
            <Feather  name="thermometer" size={24} color="purple" />
              <View style={styles.weatherDetailsItemsCol}>
                <Text >Feels Like</Text>
                <Text style={styles.textSecondary} >{`${Math.round(weatherData?.main?.feels_like-273.15)}`}</Text>
              </View>

            <Feather name="wind" size={24} color="purple" />
              <View style={styles.weatherDetailsItems}>
                <Text >Wind</Text>
                <Text style={styles.textSecondary}
                >{`${weatherData?.wind?.speed} m/s`}</Text>
            </View>
          </View>


          <View style={styles.weatherDetailsRow}>
            <Feather name="droplet" size={24} color="purple"  />
              <View style={styles.weatherDetailsItemsCol}>
                <Text>Humidity</Text>
                <Text style={styles.textSecondary}
                >{`${weatherData?.main?.humidity} %`}</Text>
              </View>

            <Feather name="compass" size={24} color="purple" />
              <View style={styles.weatherDetailsItems}>
                <Text >Pressure</Text>
                <Text style={styles.textSecondary}
                >{`${weatherData?.main?.pressure} hPa`}</Text>
              </View>
          </View>
          </View>
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
  text: {
    color: "tomato",
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 240,
    paddingBottom: 60,
    textAlign: "center",
  },
  textDetails: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily : "Optima"
  },
  textDetailsBold: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily : "Optima"
  },
  textDetailCelcius: {
    color: "white",
    fontSize: 70,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily : "Optima"
  },

  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 300,
  },
  icon: {
    position: "absolute",
    left: 20,
  },
  search: {
    position: "absolute",
    right: 20,
  },
  weatherInfo:{
  paddingBottom:130,
  marginRight:120
  },

  weatherIcon: {
    width: 300,
    height: 150,
    alignItems: "center",
  },
  
  textInput: {
    color: "red",
    fontWeight: "bold",
    fontFamily: "Robotto",
    paddingBottom: 150,
  },
  weatherInputText: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 20,
    flexWrap: "wrap",
  },
  button:{
    fontSize:10
  },
  weatherDetails: {
    marginTop: 'auto',
    margin: 15,
},
weatherDetailContainer: {
  paddingBottom:60
},
weatherDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
},
weatherDetailsBox: {
    flex: 1,
    padding: 20,  
},
weatherDetailsItems: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginRight:300,
},
weatherDetailsItemsCol: {
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  marginRight:230,
},
textSecondary: {
    fontSize: 15,
    color: "purple",
    fontWeight: '700',
    margin: 7,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
},

});
