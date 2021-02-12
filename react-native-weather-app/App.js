import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "./src/components/HomeScreen";
import { WeeklyScreen } from "./src/components/WeeklyScreen";
import { WeatherContext } from "./src/context/WeatherContext";
import { LatLonContext } from "./src/context/LatLonContext";

const Tab = createBottomTabNavigator();

const TabScreen = () => (
  <Tab.Navigator>
    <Tab.Screen name="Current" component={HomeScreen} />
    <Tab.Screen name="Weekly" component={WeeklyScreen} />
  </Tab.Navigator>
);
const Drawer = createDrawerNavigator();
const App = ({ navigation }) => {
  const [currentCity, setCurrentCity] = useState("copenhagen");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  return (
    <NavigationContainer>
      <WeatherContext.Provider value={{ currentCity, setCurrentCity }}>
        <LatLonContext.Provider value={{ lat, setLat, lon, setLon }}>
          <Drawer.Navigator initialRouteName="Current">
            <Drawer.Screen name="Current" component={TabScreen} />
            <Drawer.Screen name="Weekly" component={WeeklyScreen} />
          </Drawer.Navigator>
        </LatLonContext.Provider>
      </WeatherContext.Provider>
    </NavigationContainer>
  );
};
export default App;
