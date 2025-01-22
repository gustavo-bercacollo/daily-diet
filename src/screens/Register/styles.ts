import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_7_5};

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

export const NameText = styled.Text`
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }: any) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.S}px;

  margin-top: 40px;
  margin-bottom: 5px;
`;

export const NameInput = styled.TextInput`
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }: any) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.M}px;

  width: 100%;
  border: 2px ${({ theme }: any) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  padding: 14px;
`;

export const DescriptionText = styled.Text`
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }: any) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.S}px;

  margin-top: 20px;
  margin-bottom: 5px;
`;

export const DescriptionInput = styled.TextInput`
  width: 100%;
  height: 120px;
  border: 2px ${({ theme }: any) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  padding: 14px;
`;

export const DataAndTimeContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between
`;

export const DataAndTimeTextContainer = styled.View`
  flex-direction: column;
  margin-top: 25px;
  margin-bottom: 30px;
`;


export const DataText = styled.Text`
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }: any) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.S}px;

  margin-bottom: 5px;
  
`;

export const DataInput = styled.TextInput`
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }: any) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.M}px;
  
  width: 160px;
  border: 2px ${({ theme }: any) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  padding: 14px;
`;

export const TimeText = styled.Text`
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }: any) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.S}px;

  margin-bottom: 5px;
`;

export const TimeInput = styled.TextInput`
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }: any) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.M}px;

  width: 160px;
  border: 2px ${({ theme }: any) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  padding: 14px;
`;

export const DietText = styled.Text`
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }: any) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.S}px;

  margin-bottom: 8px;
  
`;

export const DietButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const DietButton = styled.TouchableOpacity`
  width: 165px;
  height: 50px;
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_6};
  border-radius: 6px;
  padding: 13px;
  gap: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const DietButtonText = styled.Text`
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }: any) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.M}px;
  
  text-align: center;
`;
