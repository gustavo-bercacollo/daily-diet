import AsyncStorage from "@react-native-async-storage/async-storage";
import { REGISTER_COLLECTION } from "@storage/storageConfig";
import { registerGetAll } from "./registerGetAll";

export async function registerRemoveMeal(mealId: string) {
  try {
    const storage = await registerGetAll();
    const updatedStorage = storage.filter(meal => meal.id !== mealId);
    await AsyncStorage.setItem(REGISTER_COLLECTION, JSON.stringify(updatedStorage));

    

  } catch (error) {
    console.error("Erro ao remover registro de refeição:", error);
  }
}