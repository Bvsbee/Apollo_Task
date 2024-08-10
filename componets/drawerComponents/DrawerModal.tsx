import { View, Text } from "react-native";
import React, { useState } from "react";
import { Modal, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function DrawerModal({ visible, onClose }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const screenNavigation = (screenName: string) => {
    navigation.navigate(screenName as never);
    onClose();
  };

  return <Modal></Modal>;
}

const styles = StyleSheet.create({
  ModalView: {},
});
