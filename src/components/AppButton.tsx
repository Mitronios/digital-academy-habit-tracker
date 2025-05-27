import { Button } from "@chakra-ui/react"

interface AppButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
}

const AppButton = ({children, onClick, type="button"}: AppButtonProps) => {
  return (
    <Button
      onClick={onClick} 
      type={type}
      size="lg"
      alignSelf="center"
      >{children}
    </Button>
  );
}

export default AppButton;