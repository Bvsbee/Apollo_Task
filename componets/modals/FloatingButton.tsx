import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FloatingAction } from "react-native-floating-action";
import React from "react";

export default function FloatingButton() {
  const actions = [
    {
      text: "Create New Task",
      icon: <Ionicons name="create-outline" size={24} color="#4a90e2" />,
      name: "create_task",
      position: 1,
    },

    {
      text: "Mark Task Complete",
      icon: <Ionicons name="checkmark-outline" size={24} color="#4a90e2" />,
      name: "mark_task",
      position: 2,
    },
    {
      text: "Remove Task",
      icon: <Ionicons name="trash-outline" size={24} color="#4a90e2" />,
      name: "remove_task",
      position: 3,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.content}></View>
      <FloatingAction position="right" actions={actions} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingBottom: 16,
    top: "480%",
    right: "-8%",
    zIndex: 5000,
  },
  content: {},
  floatingText: {},
});
