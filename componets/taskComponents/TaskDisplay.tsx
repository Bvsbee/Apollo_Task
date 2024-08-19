import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import React from "react";
import Task from "../../classes/Task";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import AddButton from "./AddButton";

export default function TaskDisplay({ tasks }: { tasks: Task[] }) {
  const dispalyTask = ({ item }: { item: Task }) => (
    <View style={styles.taskItem}>
      <View>
        <Text style={styles.taskText}>{item.name}</Text>
      </View>
      <View>
        <Text style={styles.taskText}>Priority: {item.priority}</Text>
      </View>
      <View>
        <Text style={styles.taskText}>Due: {item.dueDate}</Text>
      </View>
      <View>
        <Text>Description: {item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {tasks.length > 0 && (
        <View style={styles.displayList}>
          <View>
            <Text style={styles.headerText}>Task List</Text>
          </View>
          <FlatList
            data={tasks}
            renderItem={dispalyTask}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  gradient: { padding: 15, borderRadius: 10 },
  placeHolderView: {
    flex: 1,
    justifyContent: "center",
  },
  placeHolderText: { color: "#fff", fontSize: 16, textAlign: "center" },
  headerText: { fontSize: 24, fontWeight: "bold" },
  taskText: {},
  taskItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#4a90e2",
    width: "100%",
  },
  displayList: { width: "100%", paddingHorizontal: 20 },
  flatListContainer: {
    alignItems: "flex-start",
  },
});
