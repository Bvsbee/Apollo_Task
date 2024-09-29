import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState, useRef, useCallback } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTaskContext } from "../../context/TaskProvider";

export default function TaskDisplay({
  buttonActive,
}: {
  buttonActive: boolean;
}) {
  const { taskOrder, tasksMap, selectedTaskSet, selectTask } = useTaskContext();

  const dispalyTask = ({ item }: { item: string }) => {
    const task = tasksMap.get(item);
    if (!task) return null;

    const isSelected = selectedTaskSet.has(item);

    return buttonActive ? (
      <TouchableOpacity activeOpacity={0.8} onPress={() => selectTask(item)}>
        <View
          style={[
            styles.taskItem,
            {
              borderEndColor: task.isCompleted ? "#228B22" : "#DC143C",
              borderColor: task.isCompleted ? "#228B22" : "#DC143C",
            },
            isSelected && styles.selectedTask,
          ]} /* Forest Green ? Crimson Red. Conditionally Rendering*/
        >
          <View>
            <Text style={styles.taskText}>Task Name: {task.name}</Text>
          </View>
          <View>
            <Text style={styles.taskText}>Priority: {task.priority}</Text>
          </View>
          <View>
            <Text style={styles.taskText}>Due: {task.dueDate}</Text>
          </View>
          {task.desc && (
            <View>
              <Text style={styles.taskText}>Description: {task.desc}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    ) : (
      <View
        style={[
          styles.taskItem,
          { borderEndColor: task.isCompleted ? "#228B22" : "#DC143C" },
        ]} /* Forest Green ? Crimson Red. Conditonally Rendering*/
      >
        <View>
          <Text style={styles.taskText}>Task Name: {task.name}</Text>
        </View>
        <View>
          <Text style={styles.taskText}>Priority: {task.priority}</Text>
        </View>
        <View>
          <Text style={styles.taskText}>Due: {task.dueDate}</Text>
        </View>

        {task.desc && (
          <View>
            <Text style={styles.taskText}>Description: {task.desc}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {tasksMap.size > 0 && (
        <View style={styles.displayList}>
          <Text style={styles.headerText}>My Tasks</Text>

          <FlatList
            data={taskOrder}
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
  gradientBorder: {
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 1,
  },
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
    backgroundColor: "#F0F8FF", //Alice Bl
    borderEndWidth: 6,
    borderTopEndRadius: 10,
    borderEndColor: "#228B22", // Crimson Red
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
    position: "relative",
  },
  selectedTask: {
    borderWidth: 4,
    shadowColor: "#4a90e2",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    transform: [{ scale: 1.05 }],
  },
  displayList: { flex: 1, width: "100%", paddingHorizontal: 10 },
});
