import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import React from "react";
import Task from "../../classes/Task";

export default function TaskDisplay({ tasks }: { tasks: Task[] }) {
  const dispalyTask = ({ item }: { item: Task }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{item.name}</Text>
      <Text style={styles.taskText}>Priority: {item.priority}</Text>
      <Text style={styles.taskText}>Due: {item.dueDate}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Task List</Text>
      <FlatList
        data={tasks}
        renderItem={dispalyTask}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerText: { fontSize: 24, fontWeight: "bold" },
  taskText: {},
  taskItem: {},
});
