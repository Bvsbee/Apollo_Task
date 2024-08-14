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

export default function AddButton({createNewTask}: {createNewTask: (task: Task)=> void}) {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
    setCalendarModalVisible(false);
  };

  const toggleCalendar = () => {
    setCalendarModalVisible(true);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const errorHandling = () => {
    if (!selectedDate) {
      Alert.alert("Incomplete Field", "Please select a date");
      return false;
    }
    if (!selectedValue) {
      Alert.alert("Incomplete Field", "Please select a task priority");
      return false;
    }
    if (!taskName) {
      Alert.alert("Incomplete Field", "Please enter a task name");
      return false;
    }

    return true;
  };

  const createTask = () => {
    if (!errorHandling()) return;

    const newTask = new Task(
      taskName,
      selectedValue!,
      selectedDate,
      description,
      "",
      false
    );

    setTaskName("");
    setSelectedValue(null);
    setSelectedDate("");
    setDescription("");

    toggleModal();

    createNewTask(newTask)
  };

  return (
    <View>
      {/* //Make Modal Appear Button View */}
      <TouchableOpacity onPress={toggleModal}>
        <View style={styles.addIcon}>
          <Ionicons name="add-circle-sharp" size={35} color="#4a90e2" />
        </View>
      </TouchableOpacity>

      {/* //Create Task Modal View */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <BlurView
          intensity={50}
          blurReductionFactor={4}
          style={styles.modalContainer}
        >
          <View style={styles.modalContent}>
            {/* //Create Task Header */}
            <Text style={styles.headerText}>Create A New Task</Text>

            <View style={styles.textInputContainer}>
              {/* //Task Name  View */}
              <View style={styles.inputRow}>
                <Text style={styles.label}>Task Name:</Text>
                <TextInput
                  placeholder="Enter Task Name"
                  style={styles.textInput}
                  value={taskName}
                  onChangeText={setTaskName}
                ></TextInput>
              </View>

              {/* //Task Priority  View */}
              <View style={styles.inputRow}>
                <Text style={styles.label}>Task Priority: </Text>
                <Picker
                  style={styles.pickerInput}
                  onValueChange={setSelectedValue}
                  selectedValue={selectedValue}
                >
                  <Picker.Item label="Select a priority.." value={null} />
                  <Picker.Item label="High" value="high" />
                  <Picker.Item label="Medium" value="medium" />
                  <Picker.Item label="Low" value="low" />
                </Picker>
              </View>

              {/* //Due Date View */}
              <View style={styles.inputRow}>
                <Text style={styles.label}>Due Date:</Text>
                <TouchableOpacity onPress={toggleCalendar}>
                  <TextInput
                    style={styles.textInput}
                    value={selectedDate}
                    placeholder="Choose Due-Date"
                    editable={false}
                  ></TextInput>
                </TouchableOpacity>
                <Modal
                  visible={calendarModalVisible}
                  transparent={true}
                  animationType="fade"
                >
                  <BlurView
                    intensity={100}
                    blurReductionFactor={4}
                    style={styles.caldendarModalContainer}
                  >
                    <Calendar
                      onDayPress={onDayPress}
                      markedDates={{
                        [selectedDate]: {
                          selected: true,
                          marked: true,
                          selectedColor: "#00adf5",
                        },
                      }}
                      theme={{
                        todayTextColor: "#00adf5",
                        arrowColor: "#00adf5",
                      }}
                      toggleCalendar={calendarModalVisible}
                    />
                  </BlurView>
                </Modal>
              </View>

              {/* //Description View */}
              <View style={styles.inputRow}>
                <Text style={styles.label}>Description: </Text>
                <TextInput style={styles.descriptionInput}></TextInput>
              </View>
            </View>

            {/* //Close Button View */}
            <View>
              <Ionicons
                name="close"
                style={styles.closeButton}
                size={26}
                onPress={() => setModalVisible(false)}
              />
            </View>

            {/* //Create Task Button View */}
            <LinearGradient
              colors={["#4a90e2", "#34a0a4"]} // Linear gradient colors
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientView}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPressIn={() => createTask()}
              >
                <Text style={styles.createTaskButtonText}>Create Task!</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </BlurView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  caldendarModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
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
  textInputContainer: {
    marginTop: 40,
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 25,
  },
  textInput: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#fff5ee", //SeaShell
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginLeft: 10,
    padding: 2,
  },
  descriptionInput: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#fff5ee", //SeaShell
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginLeft: 10,
    padding: 2,
  },
  pickerInput: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#fff5ee", //SeaShell
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginLeft: 10,
    padding: 2,
  },
  closeButton: {
    position: "absolute",
    right: "-3%",
    top: -333,
    backgroundColor: "#e74c3c",
    borderRadius: 50,
  },
  header: {},
  headerText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
  },
  label: {
    fontSize: 18,
    width: 100,
    marginRight: 10,
  },
  gradientView: {
    borderRadius: 55,
    paddingVertical: 9,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  createTaskButtonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  addIcon: {},
});
