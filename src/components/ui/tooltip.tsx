// src/components/ui/tooltip.tsx
import {
  Tooltip as ChakraTooltip,
  type TooltipProps as ChakraTooltipProps,
} from "@chakra-ui/react"
import { type ReactNode } from "react"

export interface TooltipProps extends ChakraTooltipProps {
  label: string
  children: ReactNode
}

export const Tooltip = ({ label, children, ...props }: TooltipProps) => {
  return (
    <ChakraTooltip label={label} hasArrow {...props}>
      {children}
    </ChakraTooltip>
  )
}
