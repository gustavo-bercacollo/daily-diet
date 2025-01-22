import { BackgroundColorProps, Container, Text } from "./styles";
import { ArrowIcon } from "@components/arrowIcon";

type Props = {
  backgroundColor: BackgroundColorProps;
  text: string;
};

export function SecondaryHeader({ backgroundColor, text }: Props) {
  return (
    <Container backgroundColor={backgroundColor}>
        <ArrowIcon
            icon={"arrow-back"}
            type="TERTIARY"
            screen="REGISTER"
            />
      <Text>{text}</Text>
    </Container>
  );
}