import { Container } from "./styles";

import { SecondaryHeader } from "@components/secondaryHeader";
import { Form } from "@components/form";
import { GlobalButton } from "@components/globalButton";

export function Register() {
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
        />
      </Form>
    </Container>
  );
}
