// src/components/ui/toaster.tsx
import { useToast, Button } from "@chakra-ui/react"

export const ToasterExample = () => {
  const toast = useToast()

  const handleClick = () => {
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
  }

  return <Button onClick={handleClick}>Show Toast</Button>
}
