import { NavigationContainer } from "@react-navigation/native";
import "react-native-reanimated";
import "react-native-gesture-handler";
import { TaskProvider } from "./context/TaskProvider";
import CombinedNavigator from "./componets/navigation/CombinedNavigator";

// App Entry point
// Task Provider wraps app allowing global task management via React Context API

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <CombinedNavigator />
      </NavigationContainer>
    </TaskProvider>
  );
}
