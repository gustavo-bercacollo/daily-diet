import { DataContent } from "@components/dataContent";
import { Container } from "./styles";
import { StatisticsText } from "@components/statisticsText";

export function ContentInfo() {
  return (
    <Container>
      <StatisticsText/>
      <DataContent/>
    </Container>
  );
};