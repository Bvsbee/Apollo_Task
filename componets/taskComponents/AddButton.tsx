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
import { BlurView } from "expo-blur";
import { TextInput } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import { Calendar } from "react-native-calendars";
import { LinearGradient } from "expo-linear-gradient";
import Task from "../../classes/Task";

export default function AddButton({
  tasks,
  createNewTask,
  toggleModal,
}: {
  tasks: Task[];
  createNewTask: (task: Task) => void;
  toggleModal: () => void;
}) {
  return (
    <View>
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
        <TouchableOpacity onPressIn={toggleModal}>
          <View style={styles.addIcon}>
            <Ionicons name="add-circle-sharp" size={35} color="#4a90e2" />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: { padding: 15, borderRadius: 10 },
  placeHolderView: {
    flex: 1,
    justifyContent: "center",
  },
  placeHolderText: { color: "#fff", fontSize: 16, textAlign: "center" },
  addIcon: {},
});
