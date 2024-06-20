import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./componets/Navigator";
import CustomizedHeader from "./componets/CustomizedHeader";
import "react-native-reanimated";
import "react-native-gesture-handler";
import DrawerNavigator from "./componets/DrawerNavigator";
import CombinedNavigator from "./componets/CombinedNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <CombinedNavigator />
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
