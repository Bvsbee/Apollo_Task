import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";

export default function TestFile() {
  return (
    <TouchableOpacity>
      <LinearGradient>
        <Text style={styles.buttonText}>New Conversation</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "black",
    backgroundColor: "black",
    paddingVertical: 5,
    paddingHorizontal: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
