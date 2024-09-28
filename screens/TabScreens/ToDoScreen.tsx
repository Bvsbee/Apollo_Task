import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import TaskManager from "../../componets/taskComponents/TaskManager";

// Screen responsible for displaying everything task related.
//Task Manager stores all the features of the screen

export default function ToDoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <TaskManager />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
