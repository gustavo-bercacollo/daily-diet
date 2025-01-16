import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}: any) => theme.COLORS.GRAY_7};
  border-top-left-radius: 25px; 
  border-top-right-radius: 25px;
  padding: 0 24px;
  align-items: center;

  margin-top: -20px; 
  z-index: 1; 
  `;