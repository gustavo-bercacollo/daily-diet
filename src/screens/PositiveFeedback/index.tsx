import { Container, Title, SubTitle, Illustration, ButtonText, Button, BoldText} from "./styles";
import IllustrationFeedbackPositive from "@assets/IllustrationFeedBackPositive.png";

export function PositiveFeedBack() {
  return (
    <Container>
      <Title>
       Continue assim!
      </Title>
      <SubTitle>
       Você continua <BoldText>dentro da dieta</BoldText>. Muito bem!
      </SubTitle>
      <Illustration source={IllustrationFeedbackPositive}/>
      <Button>
       <ButtonText>
        Ir para a página inicial
       </ButtonText>
      </Button>
      
    </Container>
  );
}