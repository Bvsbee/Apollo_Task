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
        <Text style={styles.taskText}>Task Name: {item.name}</Text>
      </View>
      <View>
        <Text style={styles.taskText}>Priority: {item.priority}</Text>
      </View>
      <View>
        <Text style={styles.taskText}>Due: {item.dueDate}</Text>
      </View>
      {item.description && (
        <View>
          <Text style={styles.taskText}>Description: {item.description}</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {tasks.length > 0 && (
        <View style={styles.displayList}>
          <Text style={styles.headerText}>My Tasks</Text>
          <FlatList
            data={tasks}
            renderItem={dispalyTask}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  gradient: { padding: 15, borderRadius: 10 },
  placeHolderView: {
    flex: 1,
    justifyContent: "center",
  },
  placeHolderText: { color: "#fff", fontSize: 16, textAlign: "center" },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  taskText: { fontSize: 18 },
  taskItem: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#fff",
    borderEndWidth: 5,
    borderTopEndRadius: 10,
    borderEndColor: "red",
    borderColor: "#4a90e2",
    marginVertical: 10,
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  displayList: { flex: 1, width: "100%", paddingHorizontal: 10 },
});
