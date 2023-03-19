import { useMantineTheme } from "@mantine/core";
import { ComponentProps, HTMLProps } from "react"

type Props = { children: React.ReactNode } & HTMLProps<HTMLSpanElement>;

export function Spot(props: Props) {
  const theme = useMantineTheme();

  return (
    <span style={{ color: theme.colors.secondary[0] }} {...props}/>
  )
}