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
import { useTaskContext } from "../../context/TaskProvider";

export default function TaskDisplay({
  buttonActive,
}: {
  buttonActive: boolean;
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(false);
  const { taskOrder, tasksMap, selectTask } = useTaskContext();

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const markSelected = (id: number) => {};

  const dispalyTask = ({ item }: { item: number }) => {
    const task = tasksMap.get(item);
    if (!task) return null;
    return (
      <View
        style={[
          styles.taskItem,
          { borderEndColor: task.isCompleted ? "#228B22" : "#DC143C" },
        ]} /* Forest Green ? Crimson Red. Conditonally Rendering*/
      >
        <View>
          <Text style={styles.taskText}>Task Name: {task.name}</Text>
        </View>
        <View>
          <Text style={styles.taskText}>Priority: {task.priority}</Text>
        </View>
        <View>
          <Text style={styles.taskText}>Due: {task.dueDate}</Text>
        </View>
        <View>
          {buttonActive && (
            <View style={{ backgroundColor: "red", width: "100%" }}></View>
          )}
        </View>
        {task.description && (
          <View>
            <Text style={styles.taskText}>Description: {task.description}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {tasksMap.size > 0 && (
        <View style={styles.displayList}>
          <Text style={styles.headerText}>My Tasks</Text>

          <FlatList
            data={taskOrder}
            renderItem={dispalyTask}
            keyExtractor={(item, index) => index.toString()}
          />
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
