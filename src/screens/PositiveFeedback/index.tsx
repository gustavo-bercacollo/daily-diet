import { Container, Title, SubTitle, Illustration, ButtonText, Button} from "./styles";
import IllustrationFeedBackPositive from "@assets/IllustrationFeedBackPositive.png";

export function PositiveFeedBack() {
  return (
    <Container>
      <Title>
       Continue assim!
      </Title>
      <SubTitle>
       Você continua dentro da dieta. Muito bem!
      </SubTitle>
      <Illustration source={IllustrationFeedBackPositive}/>
      <Button>
       <ButtonText>
        Ir para a página inicial
       </ButtonText>
      </Button>
      
    </Container>
  );
}