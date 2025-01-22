import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export type ColorProps = "PRIMARY" | "SECONDARY";
export type BorderProps = "WITH" | "WITHOUT" ;


type Props = {
  backgroundColor: ColorProps;
  fontColor: ColorProps;
  iconColor: ColorProps;
  borderLine: BorderProps;
};

export const ButtonContainer = styled.TouchableOpacity<Props>`
  background-color: ${({ theme, backgroundColor, border }: any) =>
    backgroundColor === "PRIMARY" ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_7};
    
    border: ${({ theme, borderLine }: any) =>
    borderLine === "WITH" ? `1px solid ${theme.COLORS.GRAY_1}` : "none"};
    
  width: 100%;
  height: 50px;
  margin-top: 9px;
  justify-content: center;
  border-radius: 6px;
  align-items: center;
  flex-direction: row;
  padding: 8px;
  gap: 12px;
`;

export const ButtonContainerText = styled.Text<Props>`
  color: ${({ theme, fontColor }: any) => 
    fontColor === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.S}px;;
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
  
  text-align: center;
  justify-content: center;
`;

export const Icon = styled(Feather).attrs<Props>(({ theme, iconColor }: any) => ({
  size: 20, 
  color:
    iconColor === "PRIMARY"
      ? theme.COLORS.WHITE
      : theme.COLORS.GRAY_1,
}))``;