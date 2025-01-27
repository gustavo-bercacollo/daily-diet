import { useNavigation } from "@react-navigation/native";
import { Container, IconPlus, TextNewMeal } from "./styles"; 


export function NewMealButton(){
  
  const navigation = useNavigation();

  function handleNewMeal()  {
    navigation.navigate("Register");
  };

  return (
    <Container onPress={handleNewMeal}>
      <IconPlus 
      name= "plus"
      />
      <TextNewMeal>Nova Refeição</TextNewMeal>
      
    </Container>
  );
}