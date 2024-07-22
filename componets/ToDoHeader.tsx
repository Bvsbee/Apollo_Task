import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

export default function ToDoHeader() {
  return (
    <View style={styles.row}>
      <View>
        <LinearGradient
          colors={["#66ccff", "#3399ff"]}
          style={styles.linearGradient}
        >
          <TouchableOpacity>
            <Text style={styles.buttonText}>New Task</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <View>
        <LinearGradient
          colors={["#ff9999", "#ff6666"]}
          style={styles.linearGradient}
        >
          <TouchableOpacity>
            <Text style={styles.buttonText}>Remove Task</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "center", padding: 10 },

  TaskButton: {
    borderWidth: 1,
    borderRadius: 50,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 12,
  },
  linearGradient: {
    borderRadius: 50,
  },
  removeContainer: {},
  addContainer: {},
});
