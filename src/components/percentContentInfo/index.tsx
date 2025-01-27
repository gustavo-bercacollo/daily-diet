import { useNavigation } from "@react-navigation/native";

import { Percent } from "@components/percent";
import { Container } from "./styles";
import { ArrowIcon } from "@components/arrowIcon";

export function PercentContainerInfo(){

  const navigation = useNavigation();
  
    function handleHome() {
      navigation.navigate('Home');
    }
  return(
    <Container>
      <Percent/>
      <ArrowIcon 
            icon={"arrow-back"} 
            type="PRIMARY"
            screen="STATISTICS"
            onPress={handleHome}
            />
    </Container>

  );
}