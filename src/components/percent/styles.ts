import styled from "styled-components/native";

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
  font-size: ${({ theme }: any) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }: any) => theme.COLORS.GRAY_1};

  text-align: center;
`;

export const PercentText = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.XS}px;
  margin-top: 2px;

  text-align: center;
`;

