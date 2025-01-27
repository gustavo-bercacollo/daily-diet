import { Container } from "./styles"
import { ContentInfo } from "@components/contentInfo";
import { PercentContainerInfo } from "@components/percentContentInfo";


export function Statistics() {
  return (
    <Container>
      <PercentContainerInfo/>
      <ContentInfo/>
    </Container>
  );
}