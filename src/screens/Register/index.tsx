import { Form } from "@components/form";
import { Container } from "./styles";
import { RegisterHeader } from "@components/registerHeader";

export function Register() {
  return(
    <Container>
      <RegisterHeader/>
      <Form/>
    </Container>
    
  );
}