import AsyncStorage from "@react-native-async-storage/async-storage";
import { REGISTER_COLLECTION } from "@storage/storageConfig";

interface Meal {
  name: string;
  description: string;
  date: string;
  hour: string;
  isDietPositive: boolean | null;
}

export async function registerGetAll(): Promise<Meal[]> {
  try {
    const storage = await AsyncStorage.getItem(REGISTER_COLLECTION);
    const dataRegisterMeal: Meal[] = storage ? JSON.parse(storage) : [];

    return dataRegisterMeal;
  } catch (error) {
    console.error("Erro ao buscar registros:", error);
    return [];
  }
}
