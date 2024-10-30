import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Navbar from "./Navbar";
import DrawerNavigator from "../drawerComponents/DrawerNavigator";
import { ApolloScreen } from "../../screens/TabScreens";
import Login from "../../screens/login/Login";
import { RootStackParamList } from "../../screens/types/types";

const Stack = createStackNavigator<RootStackParamList>();

export default function CombinedNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
