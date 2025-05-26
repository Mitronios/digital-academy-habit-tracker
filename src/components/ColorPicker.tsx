import {Box, Stack} from "@chakra-ui/react";

interface ColorPickerProps {
  colors: string[]; // Available colors
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

const ColorPicker = ({colors, selectedColor, onColorSelect}: ColorPickerProps) => {
  return (
    // Container
    <Stack direction="row">
      {colors.map((color) => (
        <Box
        key={color}
        bg={color}
        border={selectedColor === color ? "2px solid teal" : "1px solid gray"}
        onClick={() => onColorSelect(color)}
        borderRadius = "full"
        boxSize="2rem"
        title={`Select ${color}`}

        />
      ))}
    </Stack>
  );
};

export default ColorPicker;