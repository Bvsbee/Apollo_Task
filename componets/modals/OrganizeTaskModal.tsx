import { View, Text, Modal, Task } from "react-native";
import React from "react";

export default function OrganizeTaskModal({
  tasks,
  organizeModalVisible,
  toggleOrganizeModal,
}: {
  tasks: Task[];
  organizeModalVisible: boolean;
  toggleOrganizeModal: () => void;
}) {
  return (
    <Modal
      visible={organizeModalVisible}
      transparent={true}
      animationType="slide"
    ></Modal>
  );
}
