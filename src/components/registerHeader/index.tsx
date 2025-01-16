import { NewMealText } from "@components/newMealText";
import { Container } from "./styles";
import { ArrowIcon } from "@components/arrowIcon";

export function RegisterHeader() {
  return (
    <Container>
        <ArrowIcon
            icon={"arrow-back"}
            type="TERTIARY"
            screen="REGISTER"
            />
      <NewMealText/>
    </Container>
  );
}