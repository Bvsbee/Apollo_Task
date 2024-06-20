import React from "react";

import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { ParamListBase } from "@react-navigation/routers";
import "react-native-reanimated";
import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

interface Navbar {
  title: string;
}

export default function CustomizedHeader({ title }: Navbar) {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={styles.menuIconContainer}
      >
        <Entypo name="menu" size={24} />
      </TouchableOpacity>
      <View>
        <Text>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 85,
    paddingTop: 20,
    backgroundColor: "white",
    borderBottomWidth: 2,
    borderBottomColor: "#615EFC",
  },
  menuIconContainer: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
});
