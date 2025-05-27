import { Box, FormControl, FormLabel, VStack } from "@chakra-ui/react"
import AppInput from "./AppInput"
import ColorPicker from "./ColorPicker"
import AppButton from "./AppButton"
import { useState } from "react";

// Colors
const AVAILABLE_COLORS = [
  "#8fbfec",
  "#0960ae",
  "#FFC300",
  "#FF5733",
  "#C70039",
  "#920023",
  "#581845",
  "#ff7070",

];

// Habits structure
export interface Habit {
  id: string;
  name: string;
  color: string;
}

// Form Props
interface AppFormProps {
  onAddHabit: (newHabit: Habit) => void;
}

const AppForm = ({onAddHabit}: AppFormProps) => {

  // States
  const [habitName, setHabitName] = useState<string>("")
  const [PickedColor, setPickedColor] = useState<string>("#000000")

  // Handler
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Define a new habit
    const newHabit: Habit = {
      id: crypto.randomUUID(),
      name: habitName.trim(),
      color: PickedColor
    }

    // Handle the newHabit creation
    onAddHabit(newHabit);
    setHabitName("")
    // Handle color selection
    setPickedColor("#000000")

  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHabitName(event.target.value);
  };
  
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}
        align="stretch"
        >
          <FormControl>
            <FormLabel htmlFor="habit-name">Add a new habit:</FormLabel>
            <AppInput
              placeholder="e.g. Drink more water"
              value={habitName}
              type="text"
              onChange={handleOnChange}
              id="habit-name"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="habit-color">Pick a color:</FormLabel>
            <Box display="flex"
            alignItems="center"
            justifyContent="space-between"
            >
              <ColorPicker
                colors={AVAILABLE_COLORS}
                selectedColor={PickedColor}
                onColorSelect={setPickedColor}
                id="habit-color"
              />
              <AppButton
                type="submit"
                onClick={() => {}}
              >
              Add habit
            </AppButton>
          </Box>
          </FormControl>
          
        </VStack>
      </form>
    </section>
  )
}

export default AppForm