// React and React Native core imports
import React, { useState } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";

// Third-party libraries
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import Accordion from "react-native-collapsible/Accordion";
import DropDownPicker from "react-native-dropdown-picker";
import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";

// Internal project modules
import Task from "../../classes/Task";
import { RotateInDownLeft } from "react-native-reanimated";

interface AccordionProps {
  section: any;
  unUsedIndex: number;
  isActive: boolean;
}

const SECTIONS = [
  {
    title: "Sorting",
  },
  {
    title: "Filtering",
  },
];

export default function ToDoHeader() {
  const [modalVisible, setModalVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [value, setValue] = useState(null);
  const [activeSections, setActiveSection] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);

  const [items, setItems] = useState([
    { label: "Name", value: "name" },
    { label: "Priority", value: "priority" },
    { label: "Due Date", value: "date" },
  ]);

  const renderHeader = (
    section: any,
    unUsedIndex: number,
    isActive: boolean
  ) => {
    return (
      <View style={[styles.accordionHeader]}>
        <Text style={styles.accordionHeaderText}>{section.title}</Text>
        <Ionicons
          name={isActive ? "chevron-up" : "chevron-down"}
          size={20}
          color="#000"
        />
      </View>
    );
  };

  const renderContent = (section: any) => {
    return (
      <View style={styles.content}>
        {section.title === "Sorting" && (
          <DropDownPicker
            open={menuVisible}
            value={value}
            items={items}
            setOpen={setMenuVisible}
            setValue={setValue}
            setItems={setItems}
            placeholder="Sort By..."
            style={styles.dropDownPicker}
            dropDownContainerStyle={styles.dropDownContainer}
            placeholderStyle={styles.placeHolder}
          />
        )}
        {section.title === "Filtering" && (
          <View style={styles.checkBoxRow}>
            <Text style={styles.checkBoxText}>By Completion Status</Text>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
              color="#4a90e2"
            />
          </View>
        )}
      </View>
    );
  };

  const updateSections = (activeSections: number[]) => {
    setActiveSection(activeSections);
  };

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

            <Accordion
              activeSections={activeSections}
              sections={SECTIONS}
              renderHeader={renderHeader}
              renderContent={renderContent}
              onChange={updateSections}
              expandMultiple={true}
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
  content: {
    padding: 15,
  },
  accordionHeader: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#000",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  accordionHeaderText: {
    fontSize: 16,
  },
  checkBoxText: {},
  checkBoxRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
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
  contentText: {
    paddingTop: "5%",
    fontSize: 16,
  },
  closeButton: {
    position: "absolute",
    right: "2%",
    top: "4%",
    backgroundColor: "#e74c3c",
    borderRadius: 50,
  },
  dropDownPicker: {
    top: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  dropDownContainer: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  placeHolder: { fontWeight: "bold" },
  label: {},
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "grey",
    padding: 10,
  },
  tab: {
    color: "#ffffff",
    fontSize: 16,
  },
  activeTab: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
