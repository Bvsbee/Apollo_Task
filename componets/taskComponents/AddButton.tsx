import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { FloatingAction } from "react-native-floating-action";

import { useTaskContext } from "../../context/TaskProvider";

export default function AddButton({
  toggleTaskModal,
  markButtonActive,
  buttonActive,
}: {
  toggleTaskModal: () => void;
  markButtonActive: () => void;
  buttonActive: boolean;
}) {
  //Functions or data structures via Task Global Context
  const {
    // A map that stores all task that are created.
    tasksMap,
    // A set that stores task that users select via tapping,
    selectedTaskSet,
    // Function that marks all task complete within the selectedTaskSet
    completeTask,
    // Function that removes all task within the selectedTaskSet
    removeTask,
    //Clears the set
    clearSelectedSet,
  } = useTaskContext();

  // Creating the actions that will display within the floating action button at their designated positions.
  const actions = [
    // Displays the "Create New Task" button at the bottom at position 3. When pressed the create task modal will display
    {
      text: "Create New Task",
      icon: <Ionicons name="create-outline" size={24} color="#fff" />,
      name: "create_task",
      position: 3,
      color: "#4a90e2",
    },

    /* Displays the "Mark Task Complete" button in the middle at position 2.
      When pressed it will mark all the task that are currently selected within the selectedTaskSet provided from the global task context complete. 
      The button can also be used to mark the task incomplete. */
    {
      text: "Mark Task Complete",
      icon: <Ionicons name="checkmark-outline" size={24} color={"#fff"} />,
      name: "mark_task",
      position: 2,
      color: "#4a90e2",
    },

    /* Displays the "Remove Task" button at the top of the action button at position. 
    When pressed it will remove all the task that are currently selected within the selectedTaskSet provided from globalContext */
    {
      text: "Remove Task",
      icon: <Ionicons name="trash-outline" size={24} color={"#fff"} />,
      name: "remove_task",
      position: 1,
      color: "#4a90e2",
    },
  ];
  return (
    <View style={[styles.container, { zIndex: buttonActive ? 1000 : 3000 }]}>
      {/* If the size of the map containing tasks is empty, 
      it will conditionally render a button in the center of the screen that will allow task to be created */}
      {tasksMap.size === 0 ? (
        <View style={styles.placeHolderView}>
          <TouchableOpacity
            activeOpacity={0.8}
            accessible={true}
            onPress={toggleTaskModal}
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
              toggleTaskModal();
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
