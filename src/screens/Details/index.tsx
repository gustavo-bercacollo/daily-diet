import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { SecondaryHeader } from "@components/secondaryHeader";
import { Container, Content, DateAndTimeInfo, DateAndTimeText, Description, Name, Tag, TagText } from "./styles";
import { DotIndicator } from "@components/dotIndicator";
import { GlobalButton } from "@components/globalButton";
import { registerGetAll } from "@storage/register/registerGetAll";

interface Meal {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  isDietPositive: boolean | null;
}

interface RouteParams {
  mealId: string;
}

export function Details() {
  const route = useRoute();
  const { mealId } = route.params as RouteParams;
  
  const [meal, setMeal] = useState<Meal | null>(null);

  useEffect(() => {
    async function fetchMeal() {
      const meals = await registerGetAll();
      const selectedMeal = meals.find((m: Meal) => m.id === mealId);
      setMeal(selectedMeal || null);
    }

    fetchMeal();
  }, [mealId]);

  if (!meal) {
    return <Container><Name>Carregando...</Name></Container>;
  }

  return (
    <Container>
      <SecondaryHeader 
        backgroundColor="SECONDARY"
        text="Refeição"
      />
      <Content>  
        <Name>{meal.name}</Name>
        <Description>{meal.description}</Description>
        <DateAndTimeText>Data e hora</DateAndTimeText>
        <DateAndTimeInfo>{meal.date} às {meal.hour}</DateAndTimeInfo>

        <Tag>
          <DotIndicator color={meal.isDietPositive ? "GREEN_DARK" : "RED_DARK"} size="SMALL" />
          <TagText>{meal.isDietPositive ? "Dentro da dieta" : "Fora da dieta"}</TagText>
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
