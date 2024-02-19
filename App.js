import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  <>
    <StatusBar style="dark" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </>;
  return;
}

const styles = StyleSheet.create({
  container: {},
});
