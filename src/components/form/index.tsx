import { Container, DescriptionInput, NameInput, NameText, DescriptionText, DataAndTimeContainer, DataInput, DataText, TimeInput, TimeText, DataAndTimeTextContainer, DietText, DietButton, DietButtonText, DietButtonContainer, RegisterMealButton, RegisterMealButtonText } from "./styles";
import { DotIndicator } from "@components/dotIndicator";

export function Form() {
  return (
<Container>

  <NameText>
    Nome
  </NameText>

  <NameInput/>

  <DescriptionText>
    Descrição
  </DescriptionText>

  <DescriptionInput/>

  <DataAndTimeContainer>
  <DataAndTimeTextContainer>
    <DataText>
      Data
    </DataText>
    <DataInput />
  </DataAndTimeTextContainer>

  <DataAndTimeTextContainer>
    <TimeText>
      Hora
    </TimeText>
    <TimeInput />
  </DataAndTimeTextContainer>
</DataAndTimeContainer>


<DietText>
  Está dentro da dieta?
</DietText>

<DietButtonContainer>
  <DietButton>
    <DotIndicator
      color="GREEN_DARK"
      size="SMALL"
    />
      <DietButtonText>
        Sim
      </DietButtonText>
    </DietButton>

    <DietButton>
    <DotIndicator
      color="RED_DARK"
      size="SMALL"
    />
      <DietButtonText>
        Não
      </DietButtonText>
    </DietButton> 
</DietButtonContainer>

<RegisterMealButton>
  <RegisterMealButtonText>
    Cadastrar Refeição
  </RegisterMealButtonText>
</RegisterMealButton>
  
</Container>
  );
}