import { useNavigation } from "@react-navigation/native";
import { Container } from "./styles";
import { SecondaryHeader } from "@components/secondaryHeader";
import { Form } from "@components/form";
import { GlobalButton } from "@components/globalButton";
import { useState } from "react";
import { registerCreate } from "@storage/register/registerCreate";

export function Register() {
  const navigation = useNavigation();

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [hour, setHour] = useState<string>("");
  const [isDietPositive, setIsDietPositive] = useState<boolean | null>(null);

  function handleDietSelection(isYesSelected: boolean) {
    setIsDietPositive(isYesSelected);
  }

  async function handleFeedback() {
    if (!name || !description || !date || !hour || isDietPositive === null) {
      console.log("⚠️ Preencha todos os campos!");
      return;
    }

    try {
      const meal = 
      { id: Date.now().toString(),
        name, 
        description, 
        date, 
        hour, 
        isDietPositive 
      };
      await registerCreate(meal);

      if (isDietPositive) {
        navigation.navigate("PositiveFeedBack");
      } else {
        navigation.navigate("NegativeFeedBack");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <SecondaryHeader backgroundColor="PRIMARY" text="Nova Refeição" />

      <Form
        onDietSelection={handleDietSelection}
        onChangeName={setName}
        onChangeDescription={setDescription}
        onChangeDate={setDate}
        onChangeHour={setHour}
      >
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
