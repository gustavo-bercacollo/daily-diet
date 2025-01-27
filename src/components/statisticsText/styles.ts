import theme from "@theme/index";
import styled from "styled-components/native";

export const Container = styled.Text`
  font-family: ${({theme}: any)  => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}: any)  => theme.FONT_SIZE.S}px;
  color: ${({theme}: any)  => theme.COLORS.GRAY_1};

  margin-top: 33px;
  margin-bottom: 23px;
`;