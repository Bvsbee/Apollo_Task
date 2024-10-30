import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.row}>
          <Feather name="lock" size={24} color="black" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Email Address"
          ></TextInput>
        </View>

        <View style={styles.row}>
          <Entypo name="email" size={24} color="black" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password"
          ></TextInput>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f5",
  },
  formContainer: {},
  row: {
    flexDirection: "row",
  },
  textInput: { fontSize: 18 },
});
