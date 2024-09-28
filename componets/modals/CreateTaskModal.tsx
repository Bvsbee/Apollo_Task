import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import { BlurView } from "expo-blur";
import { TextInput } from "react-native-gesture-handler";
import { Calendar } from "react-native-calendars";
import { LinearGradient } from "expo-linear-gradient";
import Task from "../../classes/Task";
import { Ionicons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import { useTaskContext } from "../../context/TaskProvider";

export default function CreateTaskModal({
  taskModalVisible,
  toggleCreateTaskModal,
}: {
  taskModalVisible: boolean;
  toggleCreateTaskModal: () => void;
}) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const { addTask } = useTaskContext();

  const [menuVisible, setMenuVisible] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const [items, setItems] = useState([
    { label: "High", value: "High" },
    { label: "Medium", value: "Medium" },
    { label: "Low", value: "Low" },
  ]);

  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
    setCalendarModalVisible(false);
  };

  const toggleCalendar = () => {
    setCalendarModalVisible(true);
  };

  const errorHandling = () => {
    if (!selectedDate) {
      Alert.alert("Incomplete Field", "Please select a date");
      return false;
    }
    if (!value) {
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

    const newTaskID = Date.now();

    const newTask = new Task(
      newTaskID,
      taskName,
      value!,
      selectedDate,
      description,
      "",
      false,
      false
    );

    setTaskName("");
    setValue(null);
    setSelectedDate("");
    setDescription("");

    toggleCreateTaskModal();

    addTask(newTask);
  };

  return (
    <Modal visible={taskModalVisible} transparent={true} animationType="slide">
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
              <Text style={styles.label}>Priority: </Text>
              <DropDownPicker
                open={menuVisible}
                value={value}
                items={items}
                setItems={setItems}
                setOpen={setMenuVisible}
                setValue={setValue}
                placeholder="Select a priority..."
                style={styles.dropDown}
                dropDownContainerStyle={styles.dropDownContainer}
              />
            </View>

            {/* //Due Date View */}
            <View style={styles.inputRow}>
              <Text style={styles.label}>Due Date:</Text>
              <TouchableOpacity onPress={toggleCalendar}>
                <TextInput
                  style={styles.dueDateTextInput}
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
                  style={styles.calendarModalContainer}
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
              <TextInput
                style={styles.descriptionInput}
                value={description}
                placeholder="Enter A Description"
                onChangeText={setDescription}
              ></TextInput>
            </View>
          </View>

          {/* //Close Button View */}
          <Ionicons
            name="close"
            style={styles.closeButton}
            size={26}
            onPress={toggleCreateTaskModal}
          />

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
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  calendarModalContainer: {
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
  dueDateTextInput: {
    width: 206,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#fff", //White
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginLeft: 10,
  },
  textInput: {
    flex: 1,
    width: "63%",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#fff", //White
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginLeft: 10,
  },
  descriptionInput: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#fff", //White
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginLeft: 10,
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
    right: "3%",
    borderRadius: 50,
    marginTop: 4,
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
  dropDown: {
    width: "63%",
    backgroundColor: "#fff",
    left: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  dropDownContainer: {
    width: "63%",
    backgroundColor: "#fff",
    left: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
});
