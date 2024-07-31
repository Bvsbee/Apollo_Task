import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import TaskList from "../../componets/taskComponents/TaskList";

export default function ToDoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <TaskList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
