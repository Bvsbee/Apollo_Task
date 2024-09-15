import { View, Text, StyleSheet, Modal, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Task from "../../classes/Task";
import AddButton from "./AddButton";

import TaskDisplay from "./TaskDisplay";
import CreateTaskModal from "../modals/CreateTaskModal";

//What does a Task consist of? Priority, Name, Due by, Desc,due date, notes?

export default function TaskList() {
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);

  const markButtonActive = () => {
    setButtonActive(!buttonActive);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AddButton
        toggleModal={toggleModal}
        markButtonActive={markButtonActive}
        buttonActive={buttonActive}
      />

      <View style={styles.displayList}>
        <TaskDisplay buttonActive={buttonActive} />
      </View>

      <CreateTaskModal modalVisible={modalVisible} toggleModal={toggleModal} />
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
