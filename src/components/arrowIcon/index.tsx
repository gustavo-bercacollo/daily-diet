import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, ContainerTouchableOpacity, Icon, IconPositionScreenProps } from "./styles";

type Props = TouchableOpacityProps & {
  icon: keyof typeof Icon.glyphMap; 
  type: ButtonIconTypeStyleProps;
  screen: IconPositionScreenProps;
};

export function ArrowIcon({ icon, type, screen, ...rest }: Props) {
  return (
    <ContainerTouchableOpacity screen={screen} {...rest}>
      <Icon 
      name={icon} 
      type={type} 
      />
    </ContainerTouchableOpacity>
  );
}
