import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SettingsScreen } from "../screens/SettingsScreens";
import Navbar from "./Navbar";
import {
  ApolloScreen,
  CalenderScreen,
  ToDoScreen,
} from "../screens/TabScreens";
import { TouchableOpacity } from "react-native-gesture-handler";

import { VirtualizedList } from "react-native";
import TestFile from "./TestFile";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          borderBottomColor: "black",
          backgroundColor: "#f0f8ff",
          borderWidth: 1,
          borderColor: "#4a90e2",
        },
      }}
    >
      <Drawer.Screen
        name="AquariusAI"
        component={ApolloScreen}
        options={({}) => ({
          headerRight: () => <TestFile />,
        })}
      />
      <Drawer.Screen name="To-Do List" component={ToDoScreen} options={{}} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Calender" component={CalenderScreen} />
    </Drawer.Navigator>
  );
}
