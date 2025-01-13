import { Percent } from "@components/percent";
import { Container } from "./styles";
import { ArrowIcon } from "@components/arrowIcon";

export function PercentContainerInfo(){
  return(
    <Container>
      <Percent/>
      <ArrowIcon 
            icon={"arrow-back"} 
            type="PRIMARY"
            screen="STATISTICS"
            />
    </Container>

  );
}