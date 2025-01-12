import styled from "styled-components/native";
import { Octicons } from "@expo/vector-icons"

export const DotIcon = styled(Octicons).attrs(({ theme }: any) => ({
  size: 30,
  color: theme.COLORS.RED_MIND
  
}))``;