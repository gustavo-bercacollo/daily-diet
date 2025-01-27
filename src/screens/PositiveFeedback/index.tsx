import { useNavigation } from "@react-navigation/native";

import { Container, Title, SubTitle, Illustration, ButtonText, Button, BoldText} from "./styles";
import IllustrationFeedbackPositive from "@assets/IllustrationFeedbackPositive.png";

export function PositiveFeedBack() {

  const navigation = useNavigation();
  
  function handleHome() {
    navigation.navigate("Home");
  };

  return (
    <Container>
      <Title>
       Continue assim!
      </Title>
      <SubTitle>
       Você continua <BoldText>dentro da dieta</BoldText>. Muito bem!
      </SubTitle>
      <Illustration source={IllustrationFeedbackPositive}/>
      <Button onPress={handleHome}>
       <ButtonText>
        Ir para a página inicial
       </ButtonText>
      </Button>
      
    </Container>
  );
}