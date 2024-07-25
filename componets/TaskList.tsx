import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Task from "../classes/Task";

//What does a Task consist of? Priority, Name, Due by, Desc,due date, notes?




export default function TaskList() {

  name: String;
  priority: String;
  dueDate: String;
  desccription: String;
  note: String;

 


  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.addIcon}>
            <Ionicons name="add-circle-sharp" size={35} color="#4a90e2" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.removeIcon}>
            <FontAwesome5 name="minus-circle" size={35} color="#DC143C" />
          </View>
        </TouchableOpacity>
      </View>


      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    right: 30,
    bottom: -750,
  },
  addIcon: {},
  removeIcon: {},
});
