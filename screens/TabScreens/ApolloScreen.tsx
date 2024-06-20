import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import CustomizedHeader from "../../componets/CustomizedHeader";

export default function ApolloScreen() {
  const [placeholder, setPlaceholder] = React.useState(
    "Ask Apollo anything..."
  );

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
      <View>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.inputField}>
            <TextInput
              placeholder={placeholder}
              style={styles.textInput}
            ></TextInput>
          </View>
        </KeyboardAvoidingView>
      </View>
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

    borderColor: "#615EFC",
  },
  background: {
    flex: 1,
    resizeMode: "cover", // or "contain" for different scaling
  },
  textInput: {
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    margin: 10,
    backgroundColor: "#f0f0f0",
    color: "#333",
    fontSize: 16,
    width: "100%",
  },
});
