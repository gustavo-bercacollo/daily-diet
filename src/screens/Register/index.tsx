import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";
import { SecondaryHeader } from "@components/secondaryHeader";
import { Form } from "@components/form";
import { GlobalButton } from "@components/globalButton";

export function Register() {
    const navigation = useNavigation();
    
      function handleFeedback() {
        navigation.navigate("PositiveFeedBack");
      }
  

  return (
    <Container>
      <SecondaryHeader 
        backgroundColor="PRIMARY" 
        text="Nova Refeição" 
      />
      <Form>
        <GlobalButton
          backgroundColor="PRIMARY"
          fontColor="PRIMARY"
          text="Cadastrar refeição"
          onPress={handleFeedback}
        />
      </Form>
    </Container>
  );
}
