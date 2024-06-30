import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SettingsScreen } from "../screens/SettingsScreens";
import Navbar from "./Navbar";
import { ApolloScreen, ToDoScreen } from "../screens/TabScreens";
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
          borderWidth: 2,
        },
      }}
    >
      <Drawer.Screen
        name="ApolloAI"
        component={ApolloScreen}
        options={({}) => ({
          headerRight: () => <TestFile />,
        })}
      />
      <Drawer.Screen name="To-Do List" component={ToDoScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
