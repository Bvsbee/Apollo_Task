import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function RemoveButton() {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.removeIcon}>
          <FontAwesome5 name="minus-circle" size={35} color="#DC143C" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  removeIcon: {},
});
