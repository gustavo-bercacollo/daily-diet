import React from "react";

import { Container } from "./styles";
import { Header } from "@components/header";
import { Percent } from "@components/percent";

export function Home() {
  return (
    <Container>
      <Header />
      <Percent/>
    </Container>
  );
}
