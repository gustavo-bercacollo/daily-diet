import { Container, Title, SubTitle, Illustration, ButtonText, Button, BoldText} from "./styles";
import IllustrationFeedbackNegative from "@assets/IllustrationFeedbackNegative.png";

export function NegativeFeedBack() {
  return (
    <Container>
      <Title>
       Que pena!
      </Title>
      <SubTitle>
       Você <BoldText>saiu da dieta</BoldText> dessa vez, mas continue se esforçando e não desista!
      </SubTitle>
      <Illustration source={IllustrationFeedbackNegative}/>
      <Button>
       <ButtonText>
        Ir para a página inicial
       </ButtonText>
      </Button>
      
    </Container>
  );
}