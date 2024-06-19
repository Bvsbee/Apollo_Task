import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./componets/Navigator";
import CustomizedHeader from "./componets/CustomizedHeader";
import "react-native-reanimated";
import "react-native-gesture-handler";
import DrawerNavigator from "./componets/DrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
