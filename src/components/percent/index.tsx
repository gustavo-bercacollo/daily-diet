import { ArrowIcon } from "@components/arrowIcon";
import { Container, PercentNumber, PercentText } from "./styles";

export function Percent(){
  return (
    <Container>
      <PercentNumber>90,86%</PercentNumber>
      <PercentText>das refeições dentro da dieta</PercentText>
    </Container>
  );
}