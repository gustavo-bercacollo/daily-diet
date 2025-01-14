import { CompareSuccessFail, Container, ContainerComparer, ContainerInfoMealStatistics, NumberInfoMealStatistics, TextInfoMealStatistics } from "./styles";

export function DataContent() {
  return (
    <Container>

      <ContainerInfoMealStatistics>
        <NumberInfoMealStatistics>22</NumberInfoMealStatistics>

        <TextInfoMealStatistics>
         melhor sequência de pratos dentro da dieta
        </TextInfoMealStatistics>

      </ContainerInfoMealStatistics>

      <ContainerInfoMealStatistics>
        <NumberInfoMealStatistics>109</NumberInfoMealStatistics>

        <TextInfoMealStatistics>
         melhor sequência de pratos dentro da dieta
        </TextInfoMealStatistics>
      </ContainerInfoMealStatistics>

    <ContainerComparer>
      <CompareSuccessFail color="SUCCESS">
        <NumberInfoMealStatistics>99</NumberInfoMealStatistics>
        <TextInfoMealStatistics>
          refeições dentro da dieta
        </TextInfoMealStatistics>
      </CompareSuccessFail>

      <CompareSuccessFail color="FAIL">
        <NumberInfoMealStatistics>10</NumberInfoMealStatistics>
        <TextInfoMealStatistics>
          refeições fora da dieta
        </TextInfoMealStatistics>
      </CompareSuccessFail>
    </ContainerComparer>
      
    </Container>
  );
}