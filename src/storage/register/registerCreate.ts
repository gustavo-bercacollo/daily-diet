import AsyncStorage from "@react-native-async-storage/async-storage";
import { REGISTER_COLLECTION } from "@storage/storageConfig";
import { registerGetAll } from "./registerGetAll";


interface Meal {
  name: string;
  description: string;
  date: string;
  hour: string;
  isDietPositive: boolean | null;
}
export async function registerCreate(meal: Meal) {
  try {
    
    const storedRegisterMeal = await registerGetAll();
  
    const updatedRegisterMeal = [...storedRegisterMeal, meal];

    await AsyncStorage.setItem(
      REGISTER_COLLECTION,
      JSON.stringify(updatedRegisterMeal)
    );

  } catch (error) {
    console.error("Erro ao criar novo registro de refeição:", error);
  }
}
