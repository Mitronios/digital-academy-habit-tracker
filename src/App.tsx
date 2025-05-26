import { Box, Container, Heading, VStack } from '@chakra-ui/react'
import './App.css'
import AppForm from './components/AppForm'
import AppButton from './components/AppButton'

function App() {
  return(
    <main>
      <Container>
        <VStack>
          <Heading>
            HabitTracker
          </Heading>
          <Box>
          <AppForm onAddHabit={() => {}}/>
          </Box>
          <AppButton onClick={() => {}} type="button">
            Reset Habits
          </AppButton>
        </VStack>
      </Container>
    </main>   
  )
}

export default App
