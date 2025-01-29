import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";
import { SecondaryHeader } from "@components/secondaryHeader";
import { Form } from "@components/form";
import { GlobalButton } from "@components/globalButton";
import { useState } from "react";

export function Register() {
  const navigation = useNavigation();

  const [isDietPositive, setIsDietPositive] = useState<boolean | null>(null);

  function handleDietSelection(isYesSelected: boolean) {
    setIsDietPositive(isYesSelected);
  }

  function handleFeedback() {
    if (isDietPositive) {
      navigation.navigate("PositiveFeedBack");
    } else {
      navigation.navigate("NegativeFeedBack");
    }
  }

  return (
    <Container>
      <SecondaryHeader backgroundColor="PRIMARY" text="Nova Refeição" />
      
      <Form onDietSelection={handleDietSelection}>
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

