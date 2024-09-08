import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./componets/Navigator";
import CustomizedHeader from "./componets/drawerComponents/CustomizedHeader";
import "react-native-reanimated";
import "react-native-gesture-handler";
import DrawerNavigator from "./componets/drawerComponents/DrawerNavigator";
import CombinedNavigator from "./componets/CombinedNavigator";
import GestureHandlerRootView from "react-native-gesture-handler";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

export default function App() {
  return (
    <ActionSheetProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </ActionSheetProvider>
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
