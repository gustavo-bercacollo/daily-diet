import styled from "styled-components/native";
import { Octicons } from '@expo/vector-icons'

export const Container = styled.View`
  width: 100%;
  height: 49px;
  border: 1px solid ${({ theme }: any) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  //justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 12px;
  gap: 12px;
  margin-bottom: 8px;
`;

export const Hour = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.GRAY_1};
  size: ${({ theme }: any) => theme.FONT_SIZE.M};
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
`;

export const Divider = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.GRAY_4};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.L};
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
`;

export const MealCardText = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.M};
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
`;
