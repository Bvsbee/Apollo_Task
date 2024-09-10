import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Pressable,
} from "react-native";
import React, { useState, useRef, useCallback } from "react";
import Task from "../../classes/Task";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import AddButton from "./AddButton";
import HandleTaskModal from "../modals/HandleTaskModal";
import { useActionSheet } from "@expo/react-native-action-sheet";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import BottomSheet from "@gorhom/bottom-sheet";
import bottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet";
import FloatingButton from "../modals/FloatingButton";

export default function TaskDisplay({ tasks }: { tasks: Task[] }) {
  const [modalVisible, setModalVisible] = useState(false);

  /* const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    const options = ["Mark Task Completed", "Remove Task"];
    const icons = [
      <AntDesign name="checksquareo" size={24} color="black" />,
      <EvilIcons name="trash" size={24} color="black" />,
    ];
    
    const destructiveButtonIndex = 1;

    showActionSheetWithOptions(
      {
        message: "Select an option for the task",
        options,
        icons,
        destructiveButtonIndex,
      },
      (selectedIndex: number | undefined) => {
        switch (selectedIndex) {
          case 1:
            // Mark as Completed
            break;
          case 2:
            // Remove/Delete Task
            break;
        }
      }
    );
  }; */

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const dispalyTask = ({ item }: { item: Task }) => (
    <View
      style={[
        styles.taskItem,
        { borderEndColor: item.isCompleted ? "#228B22" : "#DC143C" },
      ]} /* Forest Green ? Crimson Red. Conditonally Rendering*/
    >
      <View>
        <Text style={styles.taskText}>Task Name: {item.name}</Text>
      </View>
      <View>
        <Text style={styles.taskText}>Priority: {item.priority}</Text>
      </View>
      <View>
        <Text style={styles.taskText}>Due: {item.dueDate}</Text>
      </View>
      {item.description && (
        <View>
          <Text style={styles.taskText}>Description: {item.description}</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {tasks.length > 0 && (
        <View style={styles.displayList}>
          <Text style={styles.headerText}>My Tasks</Text>
          <TouchableOpacity activeOpacity={0.8} onLongPress={toggleModal}>
            {/*  <HandleTaskModal
              toggleModal={toggleModal}
              modalVisible={modalVisible}
            /> */}

            <FloatingButton />

            <FlatList
              data={tasks}
              renderItem={dispalyTask}
              keyExtractor={(item, index) => index.toString()}
            />
          </TouchableOpacity>
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
  displayList: { flex: 1, width: "100%", paddingHorizontal: 10 },
});
