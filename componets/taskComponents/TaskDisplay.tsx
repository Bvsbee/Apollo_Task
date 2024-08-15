import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import React from "react";
import Task from "../../classes/Task";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TaskDisplay({
  tasks,
  createNewTask,
  toggleModal,
}: {
  tasks: Task[];
  createNewTask: (task: Task) => void;
  toggleModal: () =>
}) {
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
    <SafeAreaView style={styles.container}>
      {tasks.length === 0 ? (
        <TouchableOpacity activeOpacity={0.8} onPressIn={() => createNewTask()}>
          <LinearGradient
            colors={["#7da8b3", "#4a90e2"]}
            style={styles.gradientView}
          >
            <Text style={styles.placeHolderText}>
              No tasks to see here. Create one now!
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <View>
          <View>
            <Text style={styles.headerText}>Task List</Text>
          </View>
          <FlatList
            data={tasks}
            renderItem={dispalyTask}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  gradientView: {
    borderRadius: 55,
    paddingVertical: 9,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  placeHolderText: {},
  headerText: { fontSize: 24, fontWeight: "bold" },
  taskText: {},
  taskItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#4a90e2",
    width: "100%",
  },
});
