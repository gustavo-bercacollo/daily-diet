import { useNavigation } from "@react-navigation/native";

import { Container, Title, SubTitle, Illustration, ButtonText, Button, BoldText} from "./styles";
import IllustrationFeedbackNegative from "@assets/IllustrationFeedbackNegative.png";

export function NegativeFeedBack() {

  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate("Home");
  }
  
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
       <ButtonText onPress={handleHome}>
        Ir para a página inicial
       </ButtonText>
      </Button>
      
    </Container>
  );
}