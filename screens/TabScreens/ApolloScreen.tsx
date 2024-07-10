import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CustomizedHeader from "../../componets/CustomizedHeader";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

export default function ApolloScreen() {
  const [placeholder, setPlaceholder] = React.useState(
    "Ask Apollo anything..."
  );

  const [focus, setFocus] = useState(false);

  React.useEffect(() => {
    const placeholders = [
      "Ask Apollo anything...",
      "Need help? Apollo is here!",
      "What's on your mind?",
      "Try asking about the weather!",
      "Ask Apollo for the latest news!",
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % placeholders.length;
      setPlaceholder(placeholders[currentIndex]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <TouchableWithoutFeedback>
        <View style={styles.rowView}>
          <View style={styles.inputField}>
            <LinearGradient
              colors={["#7da8b3", "#4a90e2"]}
              //colors={["#4b4b4b", "#000"]}
              style={styles.sendButtonView}
            >
              <TouchableOpacity onPress={() => setFocus(true)}>
                <FontAwesome
                  name={focus ? "send" : "send-o"}
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </LinearGradient>
            <View style={styles.inputView}>
              <TextInput
                placeholder={placeholder}
                style={styles.textInput}
              ></TextInput>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowView: {
    flexDirection: "row",
    borderTopColor: "black",
  },
  inputField: {
    width: "100%",
    position: "absolute",
    bottom: Platform.OS === "ios" ? -730 : -760,
    alignItems: "center",
    borderTopColor: "#4b4b4b",

    flexDirection: "row-reverse",
  },
  sendButtonView: {
    width: "10%",
    borderRadius: 100,
    paddingHorizontal: 6.5,
    paddingVertical: 8,
    marginRight: 6,
  },

  inputView: {
    width: "90%",
  },
  textInput: {
    height: 40,
    borderColor: "black",
    borderRadius: 20,
    paddingLeft: 10,
    margin: 10,
    backgroundColor: "#f0f8ff",
    color: "#333",
    fontSize: 16,
    width: "91%",
    fontWeight: "bold",
  },
});
