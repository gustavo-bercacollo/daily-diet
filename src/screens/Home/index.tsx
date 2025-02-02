import { useNavigation} from "@react-navigation/native"
import { useState } from "react";

import { Container } from "./styles";
import { Header } from "@components/header";
import { Percent } from "@components/percent";
import { NewMealButton } from "@components/newMealButton";
import { MealText } from "@components/mealText";
import { MealCard } from "@components/mealCard";
import { DayListDate } from "@components/date";
import { ArrowIcon } from "@components/arrowIcon";
import { FlatList } from "react-native";


export function Home() {

 

 const navigation = useNavigation();

 function handleStatistics() {
  navigation.navigate("Statistics");
 }

  return (
    <Container>
      <Header />
      <Percent/>
      <ArrowIcon 
      icon={"arrow-outward"} 
      type="PRIMARY"
      screen="HOME"
      onPress={handleStatistics}
      />
      <MealText>
        
      </MealText>
      <NewMealButton/>
      
      
      
      
      <DayListDate/>
      <MealCard/>
      
  
    </Container>
  );
}
