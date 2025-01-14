import styled from "styled-components/native";

export type ColorCompareProps = "SUCCESS" | "FAIL";

type Props = {
  color: ColorCompareProps;
};

export const Container = styled.View`
  width: 100%;
  height: 309px;
`;

export const ContainerInfoMealStatistics = styled.View`
  width: 100%;
  height: 89px;
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_6};
  border-radius: 8px;
  margin-bottom: 12px;
  justify-content: center;
  align-items: center;
`;

export const TextInfoMealStatistics = styled.Text`
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.S};
  color: ${({ theme }: any) => theme.COLORS.GRAY_2};

  text-align: center;
  `;

export const NumberInfoMealStatistics = styled.Text`
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.L};
  color: ${({ theme }: any) => theme.COLORS.GRAY_1};

  margin-bottom: 8px;
  text-align: center;
`;

export const ContainerComparer = styled.View`
  width: 100%;
  height: 107px;
  flex-direction: row;
  gap: 12px;
`;

export const CompareSuccessFail = styled.View<Props>`
  width: 166.4px;
  height: 107px;
  background-color: ${({ color, theme }: any) => color === "SUCCESS" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;

  padding: 16px;
  justify-content: center;
`;