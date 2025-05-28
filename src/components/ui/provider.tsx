
import { ChakraProvider} from "@chakra-ui/react"
import {
} from "./color-mode"

export function Provider({ children }: {children: React.ReactNode}) {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  )
}
