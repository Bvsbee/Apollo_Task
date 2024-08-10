import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import CustomizedHeader from "../../componets/drawerComponents/CustomizedHeader";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ScrollView } from "react-native-gesture-handler";

export default function ApolloScreen() {
  const [placeholder, setPlaceholder] = React.useState(
    "Ask Apollo anything..."
  );

  const [typing, setTyping] = useState(false);
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
      if (!typing) {
        currentIndex = (currentIndex + 1) % placeholders.length;
        setPlaceholder(placeholders[currentIndex]);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [typing]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.container}
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={false}
        >
          {/* Middle of the page */}
          {/* <LinearGradient
          colors={["#cce7ff", "#e6f7ff"]}
          style={styles.content}
        ></LinearGradient>
       */}

          <View style={styles.content}></View>

          {/* Bottom of the page */}
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
            <ScrollView style={styles.inputView}>
              <TextInput
                multiline={true}
                autoCorrect={true}
                placeholder={placeholder}
                style={styles.textInput}
                onFocus={() => setFocus(true)}
                onChangeText={(text) => setTyping(text.length > 0)}
                onBlur={() => setFocus(false)}
              ></TextInput>
            </ScrollView>
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  inputField: {
    width: "100%",
    position: "absolute",
    alignItems: "center",
    borderTopColor: "#4a90e2",
    //borderWidth: 1,
    flexDirection: "row-reverse",
    bottom: 0,
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
    borderColor: "#4a90e2",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    margin: 10,
    backgroundColor: "#f0f8ff",
    color: "#000000",
    fontSize: 16,
    width: "91%",
    fontWeight: "bold",
  },
});
