import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import React from "react";
import Task from "../../classes/Task";

export default function TaskDisplay() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Task List</Text>
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerText: { fontSize: 24, fontWeight: "bold" },
  taskText: {},
  taskItem: {},
});
