import { View, Text, Modal, StyleSheet } from "react-native";
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
  toggleModal: () => void;
}) {
  return (
    <Modal transparent={true} animationType="slide">
      <BlurView
        intensity={50}
        blurReductionFactor={4}
        style={styles.modalContainer}
      >
        <View style={styles.modalContent}>
          <LinearGradient
            colors={["#4a90e2", "#34a0a4"]} // Linear gradient colors
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientView}
          >
            <Button style={styles.buttonView}>
              <Text style={styles.textStyles}>Mark Task Completed</Text>
            </Button>
          </LinearGradient>

          <LinearGradient
            colors={["#DC143C", "#8B0000"]}
            style={styles.gradientView}
          >
            <Button style={styles.buttonView}>
              <Text style={styles.textStyles}>Remove Task</Text>
            </Button>
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
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 55,
    paddingVertical: 9,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    position: "absolute",
    backgroundColor: "#e74c3c",
    borderRadius: 50,
    right: 3,
    marginTop: 4,
  },
  textStyles: {
    color: "#fff",
  },
});
