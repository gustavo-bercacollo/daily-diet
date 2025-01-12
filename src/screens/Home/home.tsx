import { Container } from "./styles";
import { Header } from "@components/header";
import { Percent } from "@components/percent";
import { NewMealButton } from "@components/newMealButton";
import { MealText } from "@components/mealText";


export function Home() {
  return (
    <Container>
      <Header />
      <Percent/>
      <MealText/>
      <NewMealButton/>
    </Container>
  );
}
