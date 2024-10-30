import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SettingsScreen } from "../../screens/SettingsScreens";
import { CalenderScreen, ToDoScreen } from "../../screens/TabScreens";
import ToDoHeader from "../screenHeaders/ToDoHeader";
import ShoppingListScreen from "../../screens/TabScreens/ShoppingListScreen";
import CreateList from "../shoppingListComponents/CreateList";
import Login from "../../screens/login/Login";

// Creates the navigation pathways a drawer navigation set up

// Allows for definition for the navigation container and screens for it
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f0f8ff",
          borderWidth: 1,
          borderColor: "#4a90e2",
        },
      }}
    >
      {/* To Do list screen*/}
      <Drawer.Screen
        name="To-Do List"
        component={ToDoScreen}
        options={({}) => ({
          headerRight: () => <ToDoHeader />, //Custom header for To-Do list screen
        })}
      />

      {/* Settings screen*/}
      <Drawer.Screen name="Settings" component={SettingsScreen} />

      {/*Calender screen*/}
      <Drawer.Screen name="Calender" component={CalenderScreen} />

      {/* Shopping List screen*/}
      <Drawer.Screen
        name="Shopping"
        component={ShoppingListScreen}
        options={({}) => ({
          headerRight: () => <CreateList />, // Custom header for Shopping List screen
        })}
      />
    </Drawer.Navigator>
  );
}
