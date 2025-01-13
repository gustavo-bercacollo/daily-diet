import { ArrowIcon } from "@components/arrowIcon";
import { Container } from "./styles"

import { ContentInfo } from "@components/contentInfo";
import { PercentContainerInfo } from "@components/percentContentInfo";

export function Statistics() {
  return (
    <Container>
      <ArrowIcon 
            icon={"arrow-back"} 
            type="PRIMARY"
            screen="STATISTICS"
            />
      <PercentContainerInfo/>
      <ContentInfo/>
    </Container>
  );
}