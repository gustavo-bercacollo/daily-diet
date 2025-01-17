import { DotIcon, DotSizeProps, DotColorProps } from "./styles";

type Props =  {
  size: DotSizeProps;  
  color: DotColorProps
};

export function DotIndicator({ size, color }: Props) {
  return(
    <DotIcon 
    name="dot-fill"
    size={size}
    color={color}
    />
  );
}