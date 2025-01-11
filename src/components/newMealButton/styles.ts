import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  background-color: ${({ theme}: any) => theme.COLORS.GRAY_2};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 8px;
  gap: 14px;

`;

export const TextNewMeal = styled.Text`
  color: ${({ theme}: any) => theme.COLORS.WHITE};
  font-size: ${({ theme}: any) => theme.FONT_SIZE.S};
  font-family: ${({ theme}: any) => theme.FONT_FAMILY.BOLD};
  text-align: center;
`;

export const IconPlus = styled(Feather).attrs(({ theme }: any) => ({
  size: 18,
  color: theme.COLORS.WHITE
}))``;