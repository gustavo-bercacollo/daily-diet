import { RegisterContainerInfo } from "@components/registerContentInfo";
import { Container } from "./styles";
import { RegisterHeader } from "@components/registerHeader";

export function Register() {
  return(
    <Container>
      <RegisterHeader/>
      <RegisterContainerInfo/>
    </Container>
    
  );
}