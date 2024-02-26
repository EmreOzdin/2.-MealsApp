import { Text } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  return <Text>This is the meal detal screen ({mealId})</Text>;
}

export default MealDetailScreen;
