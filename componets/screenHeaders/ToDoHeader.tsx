import { View, Text, StyleSheet, Modal } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import Task from "../../classes/Task";
import { BlurView } from "expo-blur";
import DropDownPicker from "react-native-dropdown-picker";
import { Ionicons } from "@expo/vector-icons";

export default function ToDoHeader() {
  const [modalVisible, setModalVisible] = useState(false);
  //First DropDown
  const [firstDropDownVisible, setFirstDropDownVisible] = useState(false);
  const [firstDropDownValue, setFirstDropDownValue] = useState(null);
  const [firstDropDownItems, setFirstDropDownItems] = useState([
    { label: "None", value: "None" },
    { label: "Name", value: "name" },
    { label: "Priority", value: "priority" },
    { label: "Due Date", value: "date" },
  ]);

  //Second DropDown
  const [secondDropdownOpen, setSecondDropdownOpen] = useState(false);
  const [secondDropdownValue, setSecondDropdownValue] = useState(null);
  const [secondDropdownItems, setSecondDropdownItems] = useState([
    { label: "None", value: "None" },
    { label: "Completion Status ", value: "Completion Status" },
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
              open={firstDropDownVisible}
              value={firstDropDownValue}
              items={firstDropDownItems}
              setOpen={setFirstDropDownVisible}
              setValue={setFirstDropDownValue}
              setItems={setFirstDropDownItems}
              placeholder="Sort By..."
              style={[styles.dropDownPicker]}
              dropDownContainerStyle={[styles.dropDownContainer]}
              placeholderStyle={styles.placeHolder}
            />

            <Text style={styles.sectionText}>Filtering</Text>
            <DropDownPicker
              open={secondDropdownOpen}
              value={secondDropdownValue}
              items={secondDropdownItems}
              setOpen={setSecondDropdownOpen}
              setValue={setSecondDropdownValue}
              setItems={setSecondDropdownItems}
              placeholder="Filter By..."
              style={[
                styles.dropDownPicker,
                { zIndex: firstDropDownVisible ? 2000 : 1000 },
              ]}
              dropDownContainerStyle={[
                styles.dropDownContainer,
                { zIndex: firstDropDownVisible ? 2000 : 1000 },
              ]}
              placeholderStyle={styles.placeHolder}
            />

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
  label: {},
});
