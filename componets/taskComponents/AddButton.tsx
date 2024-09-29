import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { FloatingAction } from "react-native-floating-action";
import { useTaskContext } from "../../context/TaskProvider";

export default function AddButton({
  toggleCreateTaskModal,
  markButtonActive,
  buttonActive,
}: {
  toggleCreateTaskModal: () => void;
  markButtonActive: () => void;
  buttonActive: boolean;
}) {
  // Global task context used for task management operations or storage
  const {
    tasksMap,
    selectedTaskSet,
    completeTask,
    removeTask,
    clearSelectedSet,
  } = useTaskContext();

  // Floating action button options
  const actions = [
    {
      text: "Create New Task",
      icon: <Ionicons name="create-outline" size={24} color="#fff" />,
      name: "create_task",
      position: 3,
      color: "#4a90e2",
    },

    {
      text: "Mark Task Complete",
      icon: <Ionicons name="checkmark-outline" size={24} color={"#fff"} />,
      name: "mark_task",
      position: 2,
      color: "#4a90e2",
    },

    {
      text: "Remove Task",
      icon: <Ionicons name="trash-outline" size={24} color={"#fff"} />,
      name: "remove_task",
      position: 1,
      color: "#4a90e2",
    },
  ];
  return (
    <View style={[styles.container]}>
      {/* If the size of the map containing tasks is empty, 
      it will conditionally render a button in the center of the screen that will allow task to be created */}
      {tasksMap.size === 0 ? (
        <View style={styles.placeHolderView}>
          <TouchableOpacity
            activeOpacity={0.8}
            accessible={true}
            onPress={toggleCreateTaskModal}
            accessibilityLabel="Create a new task"
          >
            <LinearGradient
              colors={["#7da8b3", "#4a90e2"]}
              style={styles.gradient}
            >
              <Text style={styles.placeHolderText}>
                No tasks to see here. Create one now!
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      ) : (
        /* Once tasks are present within the taskMap it will render the action button in the bottom right corner, 
        allowing users to create task, mark task complete, and remove them as well. */

        <FloatingAction
          position="right"
          actions={actions}
          color="#4a90e2"
          onPressMain={() => {
            markButtonActive(), clearSelectedSet();
          }}
          onClose={() => {
            markButtonActive(), clearSelectedSet();
          }}
          onPressItem={(name) => {
            if (name === "create_task") {
              toggleCreateTaskModal();
            } else if (name === "remove_task") {
              selectedTaskSet.forEach((id) => {
                removeTask(id);
              });
              markButtonActive();
            } else if (name === "mark_task") {
              selectedTaskSet.forEach((id) => {
                completeTask(id);
              });
            }
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  gradient: {
    padding: 15,
    borderRadius: 100,
  },
  placeHolderView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeHolderText: { color: "#fff", fontSize: 16, textAlign: "center" },
  addIcon: { position: "absolute", top: 700, left: 330, zIndex: 1000 },
});
