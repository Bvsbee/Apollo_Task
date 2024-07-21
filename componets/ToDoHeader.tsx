import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";

export default function ToDoHeader() {
  return (
    <View style={styles.row}>
      <View>
        <LinearGradient
          colors={["#7da8b3", "#4a90e2"]}
          style={styles.linearGradient}
        ></LinearGradient>
        <TouchableOpacity>
          <Text>New Task</Text>
        </TouchableOpacity>
      </View>
      <View>
        <LinearGradient
          colors={["#7da8b3", "#4a90e2"]}
          style={styles.linearGradient}
        >
          <Text>Remove Task</Text>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row" },
  linearGradient: {},
});
