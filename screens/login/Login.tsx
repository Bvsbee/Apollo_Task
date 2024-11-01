import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";

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

        <TouchableOpacity
          style={styles.buttonContainer}
          activeOpacity={0.8}
          accessible={true}
          accessibilityLabel="Login to your account"
        >
          <LinearGradient
            colors={["#7da8b3", "#4a90e2"]}
            style={styles.gradient}
          >
            <Text style={styles.buttonText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f5",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    padding: 20,
    width: "90%",
    height: "50%",
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#d8f3ff",
    shadowColor: "#000", // Add some shadow for a 3D effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Shadow for Android
  },
  row: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  textInput: {
    fontSize: 18,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "Black",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  buttonContainer: {},
  gradient: {
    padding: 5,
    borderRadius: 100,
  },
});
