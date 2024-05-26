import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import { blue100 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

export default function ApolloScreen() {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          source={require("../../assets//backgrounds/apollo.png")}
        >
          <View style={styles.inputField}></View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputField: {
    position: "absolute",
    bottom: -500,
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 20,
    borderColor: "#615EFC",
    borderWidth: 54,
  },
});
