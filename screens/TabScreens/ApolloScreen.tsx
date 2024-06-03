import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { CustomTheme } from "../../constants/themes";

export default function ApolloScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.inputField}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputField: {
    width: "85%",
    position: "absolute",
    bottom: -500,
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 20,
    borderColor: "#615EFC",
  },
  background: {
    flex: 1,
    resizeMode: "cover", // or "contain" for different scaling
  },
});
