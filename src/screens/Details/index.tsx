import { SecondaryHeader } from "@components/secondaryHeader";
import { Container, Content, DateAndTimeInfo, DateAndTimeText, Description, Name, Tag, TagText } from "./styles";
import { DotIndicator } from "@components/dotIndicator";
import { GlobalButton } from "@components/globalButton";


export function Details() {
  return (
    <Container>
     <SecondaryHeader 
     backgroundColor="SECONDARY"
     text="Refeição"
     />
     <Content>  
      <Name>Sanduíche</Name>
      <Description>
      Sanduíche de pão integral com atum e salada de alface e tomate
     </Description>
      <DateAndTimeText>Data e hora</DateAndTimeText>
      <DateAndTimeInfo>12/08/2022 às 16:00</DateAndTimeInfo>

      <Tag>
        <DotIndicator
        color="GREEN_DARK"
        size="SMALL"
        />
        
        <TagText>dentro da dieta</TagText>
      </Tag>
      
      <GlobalButton
      backgroundColor="PRIMARY"
      fontColor="PRIMARY"
      text="Editar Refeição"
      iconColor="PRIMARY"
      icon={"edit-3"}
      />
      <GlobalButton
      backgroundColor="SECONDARY"
      fontColor="SECONDARY"
      text="Excluir Refeição"
      iconColor="SECONDARY"
      icon={"trash-2"}
      borderLine="WITH"
      />
     </Content>
     
    </Container>
  );
}