import styled from "styled-components/native";

export const Date = styled.Text`
  font-family: ${({theme}: any) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}: any) => theme.FONT_SIZE.M};
  color: ${({theme}: any) => theme.COLORS.GRAY_1};

  margin-bottom: 10px
`;