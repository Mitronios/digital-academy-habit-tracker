import { Input } from "@chakra-ui/react"

interface AppInputProps {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string; // to connect with form
  type?: "text" | "number";
}

const AppInput = ({placeholder, value, onChange, id, type}: AppInputProps) => {
  return (
  <Input
  placeholder={placeholder}
  value={value}
  onChange={onChange}
  id={id}
  type={type}
  />
);
};

export default AppInput