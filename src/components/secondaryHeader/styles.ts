import styled from "styled-components/native";

export type BackgroundColorProps = "PRIMARY" | "SECONDARY";

type Props = {
  backgroundColor: BackgroundColorProps;
};

export const Container = styled.View.attrs<Props>(({ theme, backgroundColor }: any) => ({
  backgroundColor:
  backgroundColor === "PRIMARY" ? theme.COLORS.GRAY_5 : theme.COLORS.GREEN_LIGHT,  
}))`
  width: 100%;
  height: 132px;
  justify-content: center;
`;

export const Text = styled.Text`
font-family: ${({ theme}: any) =>  theme.FONT_FAMILY.BOLD};
font-size: ${({ theme}: any) =>  theme.FONT_SIZE.M};
color: ${({ theme}: any) =>  theme.COLORS.GRAY_1};

text-align: center;
`;