import { Box, Container, Heading, VStack } from '@chakra-ui/react'
import './App.css'
import AppForm, { type Habit } from './components/AppForm'
import AppButton from './components/AppButton'
import { useState } from 'react'
import HabitCard from './components/HabitCard'

function App() {

  // States
  const [habits, setHabits] = useState<Habit[]>([]);


  // Handler
  const handleAddHabit = (newHabit: Habit) => {
    setHabits((prevHabits) => [...prevHabits, newHabit]);
  }

  return(
    <main>
      <Container maxW="container.md" py={7}>
        <VStack align="stretch">
          <Heading as="h1" 
          size="xl" mb={4}>
            HabitTracker
          </Heading>
          <Box marginBottom={5}
          borderBottom='2px' 
          borderColor='gray.200'
          paddingBottom={3}
          >
          <AppForm onAddHabit={handleAddHabit}/>
          </Box>
          {/* Render habits */}
          {habits.length > 0 && (
          <Box>
            <Heading as="h2" size="md" mb={4}>
              New Habits
            </Heading>
           <VStack spacing={3} align="stretch">
            {habits.map((habit) => (
              <HabitCard 
              key={habit.id}
              habitName={habit.name}
              color={habit.color}
              />
            ))}
           </VStack>
          </Box>
          )}
        </VStack>
        <AppButton onClick={() => {}} type="button">
            Reset tracking
        </AppButton>
      </Container>
    </main>   
  )
}

export default App
