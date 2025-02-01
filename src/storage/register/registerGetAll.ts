import AsyncStorage from "@react-native-async-storage/async-storage";
import { REGISTER_COLLECTION } from "@storage/storageConfig";

export async function registerGetAll() {
  try {
    const storage = await AsyncStorage.getItem(REGISTER_COLLECTION);
    const dataRegisterMeal: string[] = storage ? JSON.parse(storage) : [];
    
    return dataRegisterMeal;
    
  } catch (error) {
    console.log(error);
    return [];
  }
}