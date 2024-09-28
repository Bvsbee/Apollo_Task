import { NavigationContainer } from "@react-navigation/native";
import "react-native-reanimated";
import "react-native-gesture-handler";
import DrawerNavigator from "./componets/drawerComponents/DrawerNavigator";
import { TaskProvider } from "./context/TaskProvider";

// App Entry point
// Task Provider wraps app allowing global task management

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </TaskProvider>
  );
}
