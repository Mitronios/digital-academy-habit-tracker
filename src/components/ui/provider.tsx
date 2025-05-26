
import { ChakraProvider} from "@chakra-ui/react"
import {
  ColorModeProvider,
} from "./color-mode"

export function Provider({ children }: {children: React.ReactNode}) {
  return (
    <ChakraProvider>
      <ColorModeProvider>
      {children}
      </ColorModeProvider>
    </ChakraProvider>
  )
}
