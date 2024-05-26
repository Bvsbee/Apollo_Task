import React from "react";
import { View, Platform } from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import {
  ApolloScreen,
  ToDoScreen,
  CalenderScreen,
} from "../screens/TabScreens";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  tabBarShowLabel: true,
  headerTitleAlign: "left",

  tabBarLabelStyle: {
    fontSize: 10,
    letterSpacing: 0.4,
    color: "#4a4e6f",
  },
  tabBarStyle: {
    backgroundColor: "white",
    borderColor: "#615EFC",
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerStyle: {
    backgroundColor: "white",
    borderBottomColor: "#615EFC",
    borderBottomWidth: 2,
  },
  tabBarActiveTintColor: "#CD1818",
  tabBarInactiveTintColor: "#321E1E",
};

export default function Navbar() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="To Do"
        component={ToDoScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                ...(Platform.OS === "ios" && {
                  marginBottom: 3,
                  marginTop: 7,
                }),
              }}
            >
              <FontAwesome5
                name={focused ? "clipboard-list" : "clipboard-list"}
                size={24}
                color={focused ? "#615EFC" : "#321E1E"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ApolloAI"
        component={ApolloScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                ...(Platform.OS === "ios" && {
                  marginBottom: 3,
                  marginTop: 7,
                }),
              }}
            >
              <MaterialCommunityIcons
                name={focused ? "brain" : "brain"}
                size={24}
                color={focused ? "#615EFC" : "#4a4e6f"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Calender"
        component={CalenderScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                ...(Platform.OS === "ios" && {
                  marginBottom: 3,
                  marginTop: 7,
                }),
              }}
            >
              <FontAwesome
                name={focused ? "calendar" : "calendar"}
                size={24}
                color={focused ? "#615EFC" : "#4a4e6f"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
