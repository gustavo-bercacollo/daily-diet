import { Sequence } from "@components/sequence";
import { Container } from "./styles";
import { Total } from "@components/total";

export function DataContent() {
  return (
    <Container>
      <Sequence/>
      <Total/>
    </Container>
  );
}