import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Task from "../../classes/Task";

interface TaskDisplayProps {
  tasks: Task[];
}

export default function TaskDisplay({ tasks }: TaskDisplayProps) {
  return (
    <View style={styles.container}>
      <Text>TaskDisplay</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerText: {},
  taskText: {},
  taskItem: {},
});
