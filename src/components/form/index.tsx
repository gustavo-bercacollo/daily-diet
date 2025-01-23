import { GlobalButton } from "@components/globalButton";
import { DotIndicator } from "@components/dotIndicator";
import {
  Container,
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

export function Form({ children }: { children: React.ReactNode }) {
  return (
    <Container>
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

      {children}
    </Container>
  );
}
