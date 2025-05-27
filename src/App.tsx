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
      <Container>
        <VStack>
          <Heading>
            HabitTracker
          </Heading>
          <Box>
          <AppForm onAddHabit={handleAddHabit}/>
          </Box>
          {/* Render habits */}
          <Box>
            <Heading>
              New Habits
            </Heading>
           <VStack>
            {habits.map((habit) => (
              <HabitCard 
              key={habit.id}
              habitName={habit.name}
              color={habit.color}
              />
            ))}
           </VStack>
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
