import { View, Text, StyleSheet, Modal, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Task from "../../classes/Task";
import AddButton from "./AddButton";
import RemoveButton from "./RemoveButton";
import TaskDisplay from "./TaskDisplay";

//What does a Task consist of? Priority, Name, Due by, Desc,due date, notes?

export default function TaskList() {
  const [tasks, setTask] = useState<Task[]>([]);

  const createNewTask = (task: Task) => {
    setTask([...tasks, task]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <AddButton createNewTask={createNewTask} />
        <RemoveButton />
      </View>

      <TaskDisplay tasks={tasks} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    right: 30,
    bottom: 30,
  },
  addIcon: {},
  removeIcon: {},
});
