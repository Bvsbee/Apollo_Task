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
import { useTaskContext } from "../../context/TaskProvider";

export default function AddButton({
  toggleModal,
  markButtonActive,
  buttonActive,
}: {
  toggleModal: () => void;
  markButtonActive: () => void;
  buttonActive: boolean;
}) {
  const [selectedAction, setSelectedAction] = useState<
    "mark_task" | "remove_task" | null
  >(null);
  const {
    tasksMap,
    selectedTaskSet,
    completeTask,
    removeTask,
    clearSelectedSet,
  } = useTaskContext();

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
      {tasksMap.size === 0 ? (
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
          onPressMain={() => {
            markButtonActive(), clearSelectedSet();
          }}
          onClose={() => {
            markButtonActive(), clearSelectedSet();
          }}
          onPressItem={(name) => {
            if (name === "create_task") {
              toggleModal();
            } else if (name === "remove_task") {
              setSelectedAction("remove_task");

              selectedTaskSet.forEach((id) => {
                removeTask(id);
              });
            } else if (name === "mark_task") {
              setSelectedAction("mark_task");

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
