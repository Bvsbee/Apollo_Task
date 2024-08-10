import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

import { useState, useEffect } from "react";

export default function TestFile() {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8}>
        <LinearGradient
          colors={["#7da8b3", "#4a90e2"]}
          style={styles.gradientView}
        >
          <View>
            <Text style={styles.newConvoButtonText}>New Conversation</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
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
  gradientView: {
    borderRadius: 55,
    paddingVertical: 9,
    paddingHorizontal: 15,
  },
  newConvoButtonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 12,
  },
});
