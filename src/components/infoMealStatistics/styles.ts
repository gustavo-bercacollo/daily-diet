import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 89px;
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_6};
  border-radius: 8px;
  margin-bottom: 12px;
`;