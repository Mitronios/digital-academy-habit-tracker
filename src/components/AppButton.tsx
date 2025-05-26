import { Button } from "@chakra-ui/react"

interface AppButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
}

const AppButton = ({children, onClick, type}: AppButtonProps) => {
  return <Button onClick={onClick}>{children} type={type}</Button>
}

export default AppButton;