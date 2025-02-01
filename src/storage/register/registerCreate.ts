import AsyncStorage from "@react-native-async-storage/async-storage";
import { REGISTER_COLLECTION } from "@storage/storageConfig";
import { registerGetAll } from "./registerGetAll";

export async function registerCreate(
  nameMeal: string,
  descriptionMeal: string,
  dateMeal: string,
  hourMeal: string,
  isDietMeal: string
) {
  try {
    
    const storedRegisterMeal = await registerGetAll();

    const newMeal = {
      nameMeal,
      descriptionMeal,
      dateMeal,
      hourMeal,
      isDietMeal,
    };
  
    const updatedRegisterMeal = [...storedRegisterMeal, newMeal];

    await AsyncStorage.setItem(
      REGISTER_COLLECTION,
      JSON.stringify(updatedRegisterMeal)
    );

  } catch (error) {
    console.error("Erro ao criar novo registro de refeição:", error);
  }
}
