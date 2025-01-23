import { SecondaryHeader } from "@components/secondaryHeader";
import { Container } from "./styles";
import { Form } from "@components/form";
import { GlobalButton } from "@components/globalButton";

export function EditMeal() {
  return (
    <Container>
      <SecondaryHeader
       backgroundColor="PRIMARY"
       text="Refeição"
      />
      <Form>
      <GlobalButton
       backgroundColor="PRIMARY"
       fontColor="PRIMARY"
       text="Salvar Alterações"

      />
      </Form>
      
    </Container>
  );
}