import { FormControl, FormLabel, VStack } from "@chakra-ui/react"
import AppInput from "./AppInput"
import ColorPicker from "./ColorPicker"
import AppButton from "./AppButton"
import { useState } from "react";

// Habits structure
export interface Habit {
  id: string;
  name: string;
  color: string;
}

// Colors
const AVAILABLE_COLORS = [
    "#DAF7A6",
    "#FFC300",
    "#FF5733",
    "#C70039",
    "#900C3F",
    "#581845",
];

const AppForm = () => {

  // States
  const [habitName, setHabitName] = useState<string>("")

  // Handler
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

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
            <ColorPicker
              colors={AVAILABLE_COLORS}
              selectedColor=""
              onColorSelect={() => {}}
              id="habit-color"
            />
          </FormControl>

          <AppButton
            type="submit"
            onClick={() => {}}
          >
            Add a new habit
          </AppButton>
        </VStack>
      </form>
    </section>
  )
}

export default AppForm