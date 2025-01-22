import {
  Container,
  Content,
  DataAndTimeContainer,
  DataAndTimeTextContainer,
  DataInput,
  DataText,
  DescriptionInput,
  DescriptionText,
  DietButton,
  DietButtonContainer,
  DietButtonText,
  DietText,
  NameInput,
  NameText,
  TimeInput,
  TimeText,
} from "./styles";

import { SecondaryHeader } from "@components/secondaryHeader";
import { DotIndicator } from "@components/dotIndicator";
import { GlobalButton } from "@components/globalButton";

export function Register() {
  return (
    <Container>
      <SecondaryHeader 
        backgroundColor="PRIMARY" 
        text="Nova Refeição" 
      />
      <Content>
        <NameText>Nome</NameText>
        <NameInput />

        <DescriptionText>Descrição</DescriptionText>
        <DescriptionInput />

        <DataAndTimeContainer>
          <DataAndTimeTextContainer>
            <DataText>Data</DataText>
            <DataInput />
          </DataAndTimeTextContainer>

          <DataAndTimeTextContainer>
            <TimeText>Hora</TimeText>
            <TimeInput />
          </DataAndTimeTextContainer>
        </DataAndTimeContainer>

        <DietText>Está dentro da dieta?</DietText>

        <DietButtonContainer>
          <DietButton>
            <DotIndicator color="GREEN_DARK" size="SMALL" />
            <DietButtonText>Sim</DietButtonText>
          </DietButton>

          <DietButton>
            <DotIndicator color="RED_DARK" size="SMALL" />
            <DietButtonText>Não</DietButtonText>
          </DietButton>
        </DietButtonContainer>

        <GlobalButton 
        text="Cadastrar Refeição"
        backgroundColor="PRIMARY"
        fontColor="PRIMARY"
        iconColor="PRIMARY"
         />
      </Content>
    </Container>
  );
}
