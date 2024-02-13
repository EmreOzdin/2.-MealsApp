import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  <>
    <StatusBar style="light" />
    <CategoriesScreen />;
  </>;
  return; 
}

const styles = StyleSheet.create({
  container: {},
});
