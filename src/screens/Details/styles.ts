import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_7};

`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({theme}: any) => theme.COLORS.GRAY_7};
  border-top-left-radius: 25px; 
  border-top-right-radius: 25px;
  padding: 0 24px;

  margin-top: -20px; 
  z-index: 1; 
`;

export const Name = styled.Text`
  font-size: ${({theme}: any) => theme.FONT_SIZE.M}px;
  font-family: ${({theme}: any) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}: any) => theme.COLORS.GRAY_1};
  margin-top: 40px;
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  font-size: ${({theme}: any) => theme.FONT_SIZE.S}px;
  font-family: ${({theme}: any) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}: any) => theme.COLORS.GRAY_1};
  margin-bottom: 24px;
`;

export const DateAndTimeText = styled.Text`
  font-size: ${({theme}: any) => theme.FONT_SIZE.S}px;
  font-family: ${({theme}: any) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}: any) => theme.COLORS.GRAY_1};
  margin-bottom: 8px;
`;

export const DateAndTimeInfo = styled.Text`
  font-size: ${({theme}: any) => theme.FONT_SIZE.M}px;
  font-family: ${({theme}: any) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}: any) => theme.COLORS.GRAY_1};
  margin-bottom: 24px;
`;

export const Tag = styled.View`
  width: 144px;
  height: 34px;
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_6};
  flex-direction: row;
  align-items: center;
  border-radius: 1000px;
  padding: 8px 16px;
  gap: 8px;
  margin-bottom: 280px;
`;

export const TagText = styled.Text`
  font-size: ${({theme}: any) => theme.FONT_SIZE.S}px;
  font-family: ${({theme}: any) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}: any) => theme.COLORS.GRAY_1};
`;
