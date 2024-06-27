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
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={{ flexDirection: "row", borderTopColor: "black" }}>
          <View style={styles.inputField}>
            <TouchableOpacity onPress={() => setFocus(true)}>
              <FontAwesome
                name={focus ? "send" : "send-o"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <TextInput
              placeholder={placeholder}
              style={styles.textInput}
            ></TextInput>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputField: {
    width: "99.1%",
    position: "absolute",
    bottom: Platform.OS === "ios" ? -730 : -760,
    alignItems: "center",
    borderTopColor: "grey",
    flexDirection: "row-reverse",
    borderTopWidth: 1,
  },
  background: {
    borderColor: "blue",
    flex: 1,
    resizeMode: "cover", // or "contain" for different scaling
  },
  textInput: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    margin: 10,
    backgroundColor: "#f0f0f0",
    color: "#333",
    fontSize: 16,
    width: "90%",
  },
});
