import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Task from "../../classes/Task";
import { BlurView } from "expo-blur";
import DropDownPicker from "react-native-dropdown-picker";
import { Ionicons } from "@expo/vector-icons";
import { useTaskContext } from "../../context/TaskProvider";

export default function ToDoHeader() {
  const [modalVisible, setModalVisible] = useState(false);
  const { sortTask, filterTask } = useTaskContext();
  //First DropDown
  const [sortingDropDownVisible, setSortDropDownVisible] = useState(false);
  const [sortDropDownValue, setSortDropDownValue] = useState(null);
  const [sortDropDownItems, setSortDropDownItems] = useState([
    { label: "None", value: "none" },
    { label: "Name", value: "name" },
    { label: "Priority", value: "priority" },
    { label: "Due Date", value: "dueDate" },
  ]);

  //Second DropDown
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [filterDropdownValue, setFilterDropdownValue] = useState(null);
  const [filterDropdownItems, setFilterDropdownItems] = useState([
    { label: "None", value: "none" },
    { label: "Completion Status ", value: "completion_status" },
  ]);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#7da8b3", "#4a90e2"]}
        style={styles.gradientView}
      >
        <TouchableOpacity activeOpacity={0.8} onPressIn={toggleModal}>
          <Text style={styles.sortingButtonText}>Organize Task</Text>
        </TouchableOpacity>
      </LinearGradient>

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <BlurView intensity={100} style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.headerText}>Organization Options</Text>

            <Text style={styles.sectionText}>Sorting</Text>
            <DropDownPicker
              open={sortingDropDownVisible}
              value={sortDropDownValue}
              items={sortDropDownItems}
              setOpen={setSortDropDownVisible}
              setValue={setSortDropDownValue}
              setItems={setSortDropDownItems}
              placeholder="Sort By..."
              style={[styles.dropDownPicker]}
              dropDownContainerStyle={[styles.dropDownContainer]}
              placeholderStyle={styles.placeHolder}
            />

            <Text style={styles.sectionText}>Filtering</Text>
            <DropDownPicker
              open={filterDropdownOpen}
              value={filterDropdownValue}
              items={filterDropdownItems}
              setOpen={setFilterDropdownOpen}
              setValue={setFilterDropdownValue}
              setItems={setFilterDropdownItems}
              placeholder="Filter By..."
              style={[
                styles.dropDownPicker,
                { zIndex: sortingDropDownVisible ? 2000 : 1000 },
              ]}
              dropDownContainerStyle={[
                styles.dropDownContainer,
                { zIndex: sortingDropDownVisible ? 2000 : 1000 },
              ]}
              placeholderStyle={styles.placeHolder}
            />

            <LinearGradient
              colors={["#4a90e2", "#34a0a4"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[
                styles.gradientView,
                { marginTop: 30, zIndex: filterDropdownOpen ? 0 : 2001 },
              ]}
            >
              <TouchableOpacity
                activeOpacity={0.1}
                onPress={() => {
                  sortTask(sortDropDownValue), filterTask(filterDropdownValue);
                  toggleModal();
                }}
                style={{ zIndex: filterDropdownOpen ? 0 : 2001 }}
              >
                <Text style={styles.text}>Confirm Action!</Text>
              </TouchableOpacity>
            </LinearGradient>

            <Ionicons
              name="close"
              style={styles.closeButton}
              size={26}
              onPress={toggleModal}
            />
          </View>
        </BlurView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "1%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  blurView: { borderRadius: 20, overflow: "hidden" },
  modalContent: {
    width: "90%",
    backgroundColor: "#d8f3ff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  gradientView: {
    borderRadius: 55,
    paddingVertical: 9,
    paddingHorizontal: 15,
  },
  sortingButtonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 12,
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  sectionText: {
    marginTop: 10,
    paddingHorizontal: 5,
    fontWeight: "bold",
  },
  contentText: {
    paddingTop: "5%",
    fontSize: 16,
  },
  closeButton: {
    position: "absolute",
    right: "2%",
    top: "4%",

    borderRadius: 50,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  dropDownPicker: {
    marginTop: 15,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  dropDownContainer: {
    marginTop: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  placeHolder: { fontWeight: "500" },
  text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  label: {},
});
