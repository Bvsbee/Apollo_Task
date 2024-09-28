import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SettingsScreen } from "../../screens/SettingsScreens";
import { CalenderScreen, ToDoScreen } from "../../screens/TabScreens";
import ToDoHeader from "../screenHeaders/ToDoHeader";
import ShoppingListScreen from "../../screens/TabScreens/ShoppingListScreen";
import CreateList from "../shoppingListComponents/CreateList";

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
      <Drawer.Screen
        name="To-Do List"
        component={ToDoScreen}
        options={({}) => ({
          headerRight: () => <ToDoHeader />,
        })}
      />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Calender" component={CalenderScreen} />
      <Drawer.Screen
        name="Shopping"
        component={ShoppingListScreen}
        options={({}) => ({
          headerRight: () => <CreateList />,
        })}
      />
    </Drawer.Navigator>
  );
}
