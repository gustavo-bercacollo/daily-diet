import { Container, Compare } from "./styles";

export function MealCompare() {
  return (
    <Container>
      <Compare
      color="SUCCESS"
      />
      <Compare
      color="FAIL"
      />
    </Container>
  );
}