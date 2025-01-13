import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";
export type IconPositionScreenProps = "HOME" | "STATISTICS";

type Props = {
  type: ButtonIconTypeStyleProps;
  screen: IconPositionScreenProps;
};


const getPositionStyles = (screen: IconPositionScreenProps) => {
  const positions = {
    HOME: `
      top: 100px;
      right: 25px;
    `,
    STATISTICS: `
      top: 35px;
      right: 340px;
    `  
  };

  return positions[screen] || "";
};

export const ContainerTouchableOpacity = styled(TouchableOpacity)<Props>`
  position: absolute;
  ${({ screen }: any) => getPositionStyles(screen)}
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }: any) => ({
  size: 25,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;
