import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Navbar from "./Navbar";
import DrawerNavigator from "./DrawerNavigator";
import { ApolloScreen } from "../screens/TabScreens";

const Stack = createStackNavigator();

export default function CombinedNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Draawer" component={DrawerNavigator} />
      <Stack.Screen name="Tab" component={Navbar} />
    </Stack.Navigator>
  );
}
