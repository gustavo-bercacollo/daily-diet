import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }: any) => theme.COLORS.GREEN_LIGHT};
  height: 102px;
  margin-top: 32px;
  margin-bottom: 40px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  
`;

export const PercentNumber = styled.Text`
  font-size: ${({ theme }: any) => theme.FONT_SIZE.XL};
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }: any) => theme.COLORS.GRAY_1};

  text-align: center;
`;

export const PercentText = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.XS};
  margin-top: 2px;

  text-align: center;
`;

export const ContainerTouchableOpacity = styled(TouchableOpacity)`
  position: absolute; 
  top: 5px; 
  right: 5px; 
  width: 40px; 
  height: 40px; 
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }: any) => ({
  size: 25,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))``;