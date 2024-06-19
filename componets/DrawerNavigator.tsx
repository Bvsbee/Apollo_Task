import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SettingsScreen } from "../screens/SettingsScreens";
import Navigator from "./Navigator";
import { ToDoScreen } from "../screens/TabScreens";
import Navbar from "./Navbar";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="NavBar"
        component={Navbar}
        options={{
          headerShown: false,
          drawerLabel: () => null,
          title: "",
          drawerIcon: () => null,
        }}
      />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
