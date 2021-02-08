import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeScreen } from "./src/components/HomeScreen";
import { WeeklyScreen } from "./src/components/WeeklyScreen";

const Tab = createBottomTabNavigator();

const TabScreen = () => (
  <Tab.Navigator>
    <Tab.Screen name="Current" component={HomeScreen} />
    <Tab.Screen name="Weekly" component={WeeklyScreen} />
  </Tab.Navigator>
);
const Drawer = createDrawerNavigator();

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Current">
        <Drawer.Screen name="Current" component={TabScreen} />
        <Drawer.Screen name="Weekly" component={WeeklyScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
