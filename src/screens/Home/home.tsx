import { Container } from "./styles";
import { Header } from "@components/header";
import { Percent } from "@components/percent";
import { NewMealButton } from "@components/newMealButton";
import { MealText } from "@components/mealText";
import { MealCard } from "@components/mealCard";


export function Home() {
  return (
    <Container>
      <Header />
      <Percent/>
      <MealText/>
      <NewMealButton/>
      
      {/*test 👇*/}
      <MealCard/>
      <MealCard/>
      <MealCard/>
      <MealCard/>
    
    </Container>
  );
}
