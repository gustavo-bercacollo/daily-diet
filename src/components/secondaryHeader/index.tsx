import { useNavigation } from "@react-navigation/native";

import { BackgroundColorProps, Container, Text } from "./styles";
import { ArrowIcon } from "@components/arrowIcon";

type Props = {
  backgroundColor: BackgroundColorProps;
  text: string;
};

export function SecondaryHeader({ backgroundColor, text }: Props) {

  const navigation = useNavigation();
  
  function handleHome() {
    navigation.navigate("Home");
  };
  
  return (
    <Container backgroundColor={backgroundColor}>
        <ArrowIcon
            icon={"arrow-back"}
            type="TERTIARY"
            screen="REGISTER"
            onPress={handleHome}
            />
      <Text>{text}</Text>
    </Container>
  );
}