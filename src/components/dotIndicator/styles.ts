import styled from "styled-components/native";
import { Octicons } from "@expo/vector-icons";

export type DotSizeProps = "SMALL" | "BIG";
export type DotColorProps = "RED_MIND" | "GREEN_MIND" | "RED_DARK" | "GREEN_DARK";

type Props = {
  size: DotSizeProps;
  color: DotColorProps;
};

export const DotIcon = styled(Octicons).attrs<Props>(({ theme, size, color }: any) => ({
  size: size === "SMALL" ? 18 : 30, 
  color: theme.COLORS[color],      
}))``;
