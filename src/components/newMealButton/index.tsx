import { Container, IconPlus, TextNewMeal } from "./styles"; 


export function NewMealButton(){
  return (
    <Container>
      <IconPlus name= "plus"/>
      <TextNewMeal>Nova Refeição</TextNewMeal>
    </Container>
  );
}