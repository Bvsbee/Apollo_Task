import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityBase,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function HandleTaskModal({
  modalVisible,
  toggleModal,
}: {
  modalVisible: boolean;
  toggleModal: (boolean: false) => void;
}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <TouchableOpacity style={styles.overLay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <Ionicons name="checkmark-outline" size={24} color="black" />
                  <Text>Complete Task</Text>
                </View>

                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <Ionicons name="trash-outline" size={24} color="black" />
                  <Text>Remove Task</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  overLay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    top: "46.5%",
  },
  modalContent: {
    width: "100%",
    padding: 8,
    backgroundColor: "#d8f3ff",
    borderWidth: 1,
    elevation: 5, // Shadow Android
    shadowColor: "#000", // Shadow IOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
