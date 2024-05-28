import React, { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "./src/screens/start";
import Ready from "./src/screens/ready";
import Finish from "./src/screens/finish";
import Develop from "./src/screens/develop";
import Agenda from "./src/screens/agenda";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Ready" component={Ready} />
        <Stack.Screen name="Finish" component={Finish} />
        <Stack.Screen name="Develop" component={Develop} />
        <Stack.Screen name="Agenda" component={Agenda} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
