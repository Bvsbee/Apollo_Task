import React from "react";
import { View, Text } from "react-native";
import Navbar from "./Navbar";
import { NavigationContainer } from "@react-navigation/native";
import Component from "react-native-paper/lib/typescript/components/Typography/Text";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SettingsScreen } from "../screens/SettingsScreens";

const NativeStack = createNativeStackNavigator();

const SettingsScreens = [SettingsScreen];

const screens = [
  { name: "Navbar", component: Navbar },
  ...SettingsScreens.map((component) => ({
    name: component.name,
    component,
  })),
];

export default function Navigator() {
  return (
    <NativeStack.Navigator>
      {screens.map((screen) => (
        <NativeStack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{ headerShown: false }}
        />
      ))}
    </NativeStack.Navigator>
  );
}
