import { DotIndicator } from "@components/dotIndicator";
import { Container, Hour, Divider, MealCardText } from "./styles";

export function MealCard (){
  return(
    <Container>
      <Hour>20:00</Hour>
      <Divider>|</Divider>
      <MealCardText>X-tudo</MealCardText>
      <DotIndicator
      color="RED_MIND"
      size="BIG"
      />
    </Container>
  );
}