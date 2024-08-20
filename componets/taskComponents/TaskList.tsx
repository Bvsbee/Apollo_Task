import { View, Text, StyleSheet, Modal, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Task from "../../classes/Task";
import AddButton from "./AddButton";
import RemoveButton from "./RemoveButton";
import TaskDisplay from "./TaskDisplay";
import CreateTaskModal from "../modals/CreateTaskModal";
import OrganizeTaskModal from "../modals/OrganizeTaskModal";

//What does a Task consist of? Priority, Name, Due by, Desc,due date, notes?

export default function TaskList() {
  const [tasks, setTask] = useState<Task[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [organizeModalVisible, setOrganizeModalVisible] = useState(false);

  const createNewTask = (task: Task) => {
    setTask([...tasks, task]);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleOrganizeModal = () => {
    setModalVisible(!organizeModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.addButton}>
        <AddButton
          tasks={tasks}
          createNewTask={createNewTask}
          toggleModal={toggleModal}
        />
      </View>

      <View style={styles.displayList}>
        <TaskDisplay tasks={tasks} />
      </View>

      <CreateTaskModal
        createNewTask={createNewTask}
        modalVisible={modalVisible}
        toggleModal={toggleModal}
      />

      {/*  <OrganizeTaskModal
        tasks={tasks}
        oraginzeModalVisible={organizeModalVisible}
        toggleOrganizeModal={toggleOrganizeModal}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  addButton: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
   
  },
  displayList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: "50%",
  },
});
