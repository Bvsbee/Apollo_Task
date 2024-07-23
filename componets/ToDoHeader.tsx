import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

export default function ToDoHeader() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#7da8b3", "#4a90e2"]}
        style={styles.gradientView}
      >
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.sortingButtonText}>Organize Task</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "1%",
  },
  gradientView: {
    borderRadius: 55,
    paddingVertical: 9,
    paddingHorizontal: 15,
  },
  sortingButtonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 12,
  },
});
