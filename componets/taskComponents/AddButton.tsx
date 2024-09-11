import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Task from "../../classes/Task";
import { FloatingAction } from "react-native-floating-action";
import FloatingButton from "../modals/FloatingButton";

export default function AddButton({
  tasks,
  createNewTask,
  toggleModal,
}: {
  tasks: Task[];
  createNewTask: (task: Task) => void;
  toggleModal: () => void;
}) {
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
    <View style={styles.container}>
      {tasks.length === 0 ? (
        <View style={styles.placeHolderView}>
          <TouchableOpacity
            activeOpacity={0.8}
            accessible={true}
            onPress={toggleModal}
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
        <FloatingAction
          position="right"
          actions={actions}
          color="#4a90e2"
          onPressItem={(name) => {
            if (name === "create_task") {
              color: "green";
              toggleModal();
            }
            if (name === "remove_tas") {
              color: "red";
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
