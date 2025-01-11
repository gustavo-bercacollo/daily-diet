import React from "react";

import { Container } from "./styles";
import { Header } from "@components/header";
import { Percent } from "@components/percent";
import { NewMealButton } from "@components/newMealButton";

export function Home() {
  return (
    <Container>
      <Header />
      <Percent/>
      <NewMealButton/>
    </Container>
  );
}
