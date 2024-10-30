import React from "react";
import { View, Text } from "react-native";
import Navbar from "./Navbar";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Component from "react-native-paper/lib/typescript/components/Typography/Text";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomizedHeader from "../drawerComponents/CustomizedHeader";
import { SettingsScreen } from "../../screens/SettingsScreens";


const NativeStack = createNativeStackNavigator();


const screens = [{ name: "Navbar", component: Navbar }];

import Login from "../../screens/login/Login";

const loginScreen = [Login];

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

/* // ...SettingsScreens.map((component) => ({
  name: component.name,
  component,
})), */
