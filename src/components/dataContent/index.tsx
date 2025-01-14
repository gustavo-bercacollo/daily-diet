import { InfoMealStatistics } from "@components/infoMealStatistics";
import { Container } from "./styles";
import { MealCompare } from "@components/mealCompare/index";

export function DataContent() {
  return (
    <Container>
      <InfoMealStatistics/>
      <InfoMealStatistics/>
      <MealCompare/>
      
    </Container>
  );
}