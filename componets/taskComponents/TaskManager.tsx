import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import AddButton from "./AddButton";
import TaskDisplay from "./TaskDisplay";
import CreateTaskModal from "../modals/CreateTaskModal";

// TaskManager is the  centralized container for the features of the to-do-list screen

export default function TaskManager() {
  // Controls the state of the setting createTaskModal visible using the add button
  const [taskModalVisible, setTaskModalVisible] = useState(false);

  // Marks the floating action button active from add button and communicates it to TaskDisplay
  const [buttonActive, setButtonActive] = useState(false);

  // Toggles state of floating action button
  const markButtonActive = () => {
    setButtonActive(!buttonActive);
  };

  // Toggles state of CreateTaskModal's visibility.
  const toggleCreateTaskModal = () => {
    setTaskModalVisible(!taskModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* AddButton is responsible for creating task, removing task, and marking task complete. */}

      <AddButton
        toggleCreateTaskModal={toggleCreateTaskModal}
        markButtonActive={markButtonActive}
        buttonActive={buttonActive}
      />

      {/* TaskDisplay is responsible for rendering the list of tasks.
      Also responds to the actions of if the floating button is active or not allowing for marking task*/}

      <View style={styles.displayList}>
        <TaskDisplay buttonActive={buttonActive} />
      </View>

      {/* CreateTask Modal is responsible for creating new tasks.*/}

      <CreateTaskModal
        taskModalVisible={taskModalVisible}
        toggleCreateTaskModal={toggleCreateTaskModal}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  displayList: {
    position: "absolute",
    justifyContent: "center",
    width: "100%",
  },
});
