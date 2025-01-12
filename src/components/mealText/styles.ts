import styled from "styled-components/native";

export const TextMeals = styled.Text`
  font-family: ${({theme}: any) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}: any) => theme.FONT_SIZE.M};
  color: ${({theme}: any) => theme.COLORS.GRAY_1};

  margin-bottom: 8px
`;