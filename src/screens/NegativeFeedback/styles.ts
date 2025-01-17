import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  color: ${({ theme }: any) => theme.COLORS.GRAY_7};

  align-items: center;
  justify-content: center;
  padding: 32px; 
`;

  export const Title = styled.Text`
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.L}px;
  color: ${({ theme }: any) => theme.COLORS.RED_DARK};;

  margin-bottom: 8px;  
`;

export const SubTitle = styled.Text`
font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
font-size: ${({ theme }: any) => theme.FONT_SIZE.S}px;
color: ${({ theme }: any) => theme.COLORS.GRAY_1};
text-align: center;
margin-bottom: 40px;  
`;

export const BoldText = styled.Text`
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }: any) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.S}px;
`;

export const Illustration = styled.Image`
  width: 224px;
  height: 288px;
  margin-bottom: 32px;
`;

export const Button = styled.TouchableOpacity`
  width: 191px;
  height: 50px;
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_2};
  border-radius: 6px;

  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.S}px;
  color: ${({ theme }: any) => theme.COLORS.WHITE};

  text-align: center;
  
`;