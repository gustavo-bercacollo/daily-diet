import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }: any) => theme.COLORS.GRAY_7};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }: any) => ({
  color: theme.COLORS.GREEN_DARK,
  size: "large",
}))``;