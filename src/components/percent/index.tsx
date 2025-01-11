import { Container, PercentNumber, PercentText, Icon, ContainerTouchableOpacity } from "./styles";

export function Percent(){
  return (
    <Container>

      {<ContainerTouchableOpacity>
      <Icon name="arrow-outward" type="PRIMARY"/>
      </ContainerTouchableOpacity>}
    
      <PercentNumber>90,86%</PercentNumber>
      <PercentText>das refeições dentro da dieta</PercentText>
    
    </Container>
  );
}