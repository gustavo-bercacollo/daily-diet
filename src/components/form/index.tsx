import { useState } from "react";
import { useTheme } from "styled-components";
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

export function Form({
  children,
  onDietSelection,
  onChangeName,
  onChangeDescription,
  onChangeDate,
  onChangeHour,
}: {
  children: React.ReactNode;
  onDietSelection: (isYesSelected: boolean) => void;
  onChangeName: (name: string) => void;
  onChangeDescription: (description: string) => void;
  onChangeDate: (date: string) => void;
  onChangeHour: (hour: string) => void;
}) {
  const theme = useTheme();

  const [isYesSelected, setIsYesSelected] = useState(false);
  const [isNoSelected, setIsNoSelected] = useState(false);

  const handleYesPress = () => {
    setIsYesSelected(!isYesSelected);
    setIsNoSelected(false);
    onDietSelection(!isYesSelected); 
  };

  const handleNoPress = () => {
    setIsNoSelected(!isNoSelected);
    setIsYesSelected(false);
    onDietSelection(false); 
  };

  return (
    <Container>
      <NameText>Nome</NameText>
      <NameInput onChangeText={onChangeName} />

      <DescriptionText>Descrição</DescriptionText>
      <DescriptionInput onChangeText={onChangeDescription} />

      <DataAndTimeContainer>
        <DataAndTimeTextContainer>
          <DataText>Data</DataText>
          <DataInput onChangeText={onChangeDate} />
        </DataAndTimeTextContainer>

        <DataAndTimeTextContainer>
          <TimeText>Hora</TimeText>
          <TimeInput onChangeText={onChangeHour} />
        </DataAndTimeTextContainer>
      </DataAndTimeContainer>

      <DietText>Está dentro da dieta?</DietText>

      <DietButtonContainer>
        <DietButton
          onPress={handleYesPress}
          style={{
            backgroundColor: isYesSelected
              ? theme.COLORS.GREEN_LIGHT
              : theme.COLORS.GRAY_6,
            borderColor: isYesSelected
              ? theme.COLORS.GREEN_DARK
              : theme.COLORS.GRAY_6,
            borderWidth: 2,
          }}
        >
          <DotIndicator color="GREEN_DARK" size="SMALL" />
          <DietButtonText>Sim</DietButtonText>
        </DietButton>

        <DietButton
          onPress={handleNoPress}
          style={{
            backgroundColor: isNoSelected
              ? theme.COLORS.RED_LIGHT
              : theme.COLORS.GRAY_6,
            borderColor: isNoSelected
              ? theme.COLORS.RED_DARK
              : theme.COLORS.GRAY_6,
            borderWidth: 2,
          }}
        >
          <DotIndicator color="RED_DARK" size="SMALL" />
          <DietButtonText>Não</DietButtonText>
        </DietButton>
      </DietButtonContainer>

      {children}
    </Container>
  );
}
