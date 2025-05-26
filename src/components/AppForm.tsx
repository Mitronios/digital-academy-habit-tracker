import { FormControl, FormLabel, VStack } from "@chakra-ui/react"
import AppInput from "./AppInput"
import ColorPicker from "./ColorPicker"
import AppButton from "./AppButton"

const AppForm = () => {
  return (
    <section>
      <form>
        <VStack spacing={4}
        align="stretch"
        >
          <FormControl id="habit-name">
            <FormLabel>Your Habit:</FormLabel>
            <AppInput
              placeholder="e.g. Drink more water"
              value="Drink more Water"
              type="text"
              onChange={() =>{}}
              id="habit-name"
            />
          </FormControl>
          <FormControl id="habit-color">
            <FormLabel>Pick a color:</FormLabel>
            <ColorPicker
              colors={[]}
              selectedColor=""
              onColorSelect={() => {}}
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