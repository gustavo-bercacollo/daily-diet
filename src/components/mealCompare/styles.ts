import styled from "styled-components/native";

export type ColorCompareProps = "SUCCESS" | "FAIL";

type Props = {
  color: ColorCompareProps;
};

export const Container = styled.View`
  width: 100%;
  height: 107px;
  flex-direction: row;
  gap: 12px;
  
`;

export const Compare = styled.View<Props>`
  width: 166.4px;
  height: 107px;
  background-color: ${({ color, theme }: any) => color === "SUCCESS" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;

`;

