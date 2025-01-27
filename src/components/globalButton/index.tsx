

import { ButtonContainer, ButtonContainerText, ColorProps, Icon, BorderProps } from "./styles";

type Props = {
  text: string;
  backgroundColor: ColorProps;
  fontColor: ColorProps;
  icon?: keyof typeof Icon.glyphMap;
  iconColor?: ColorProps;
  borderLine?: BorderProps;
  onPress?: () => void; 
};

export function GlobalButton({
  text,
  backgroundColor,
  fontColor,
  icon,
  iconColor,
  borderLine,
  onPress, 
}: Props) {

  
  return (
    <ButtonContainer onPress={onPress}
    backgroundColor={backgroundColor}
    borderLine={borderLine}>
      <Icon name={icon} iconColor={iconColor} />
      <ButtonContainerText fontColor={fontColor}>{text}</ButtonContainerText>
    </ButtonContainer>
  );
}
