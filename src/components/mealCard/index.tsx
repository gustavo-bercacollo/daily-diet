import { useEffect, useState } from "react";
import { DotIndicator } from "@components/dotIndicator";
import { Container, Hour, Divider, MealCardText } from "./styles";
import { registerGetAll } from "@storage/register/registerGetAll";

interface Meal {
  name: string;
  description: string;
  date: string;
  hour: string;
  isDietPositive: boolean | null;
}

export function MealCard() {
  const [registerData, setRegisterData] = useState<Meal[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await registerGetAll();
      console.log(data);
      setRegisterData(data);
    }

    fetchData();
  }, []);

  return (
    <>
      {registerData.map((meal, index) => (
        <Container key={index}>
          <Hour>{meal.hour}</Hour>
          <Divider>|</Divider>
          <MealCardText>{meal.name}</MealCardText>
          <DotIndicator
            color={meal.isDietPositive ? "GREEN_MIND" : "RED_MIND"}
            size="BIG"
          />
        </Container>
      ))}
    </>
  );
}
