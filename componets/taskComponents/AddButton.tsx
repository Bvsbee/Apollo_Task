import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { TextInput } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import { Calendar } from "react-native-calendars";
import { LinearGradient } from "expo-linear-gradient";

export default function AddButton() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);

  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
    setCalendarModalVisible(false);
  };

  const toggleCalendar = () => {
    setCalendarModalVisible(true);
  };

  const toggleModal = () => {
    setModalVisible(true);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleModal}>
        <View style={styles.addIcon}>
          <Ionicons name="add-circle-sharp" size={35} color="#4a90e2" />
        </View>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <BlurView
          intensity={50}
          blurReductionFactor={4}
          style={styles.modalContainer}
        >
          <View style={styles.modalContent}>
            <Text style={styles.headerText}>Task Creation!</Text>

            <View style={styles.textInputContainer}>
              <View style={styles.inputRow}>
                <Text style={styles.label}>Task Name:</Text>
                <TextInput style={styles.textInput}></TextInput>
              </View>

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
              <View style={styles.inputRow}></View>
              <View style={styles.inputRow}>
                <Text style={styles.label}>Description: </Text>
                <TextInput style={styles.textInput}></TextInput>
              </View>
            </View>
            <View>
              <Ionicons
                name="close"
                style={styles.closeButton}
                size={24}
                onPress={() => setModalVisible(false)}
              />
            </View>

            <LinearGradient
              colors={["#4a90e2", "#34a0a4"]} // Linear gradient colors
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientView}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setModalVisible(false)}
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
  },
  header: {},
  headerText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
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
