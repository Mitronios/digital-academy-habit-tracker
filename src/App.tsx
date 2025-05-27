import { Box, Container, Heading, VStack } from '@chakra-ui/react'
import './App.css'
import AppForm, { type Habit } from './components/AppForm'
import AppButton from './components/AppButton'
import { useEffect, useState } from 'react'
import HabitCard from './components/HabitCard'

// localStorage key
const LOCAL_STORAGE_KEY = "myHabitTracker";

// Check if habits exist on localStorage
const localStorageHabits = (): Habit[] => {
  try {
    const storedHabits = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedHabits ?JSON.parse(storedHabits) : [];
  } catch (error) {
    console.error("Failed to get habits from localStorage", error);
    return [];
  }
}

// App
function App() {

  // States
  const [habits, setHabits] = useState<Habit[]>(localStorageHabits);
  const [resetProgress, setResetProgress] = useState(false);

  // Persist habits
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(habits));
    } catch (error) {
      console.error("Failed to save habits.", error);
    }
  }, [habits])

  // Handlers
  const handleAddHabit = (newHabit: Habit) => {
    setHabits((prevHabits) => [...prevHabits, newHabit]);
  }

  const handleResetCompleted = () => {
    setResetProgress(true)
  }

  return(
    <main>
      <Container maxW="container.lg" py={7}
      minH="90%"
      boxShadow="dark-lg"
      borderRadius="2xl"
      >
        <VStack align="stretch"
          boxShadow="lg"
        >
          <Heading as="h1" 
          size="xl" 
          mb={4}
          textAlign="start"
          textColor="#9E905F"
          textShadow='1px 1px rgb(83, 82, 82)'
          >
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
            <Heading as="h2" 
            size="md"
             mb={4}
             textAlign="start"
             textColor="#9E905F"
             textShadow='1px 1px rgb(83, 82, 82)'

             >
              New Habits
            </Heading>
           <VStack spacing={3} align="stretch">
            {habits.map((habit) => (
              <HabitCard 
              key={habit.id}
              habitName={habit.name}
              color={habit.color}
              habitId={habit.id}
              onReset={resetProgress}
              onResetComplete={handleResetCompleted}
              />
            ))}
           </VStack>
          </Box>
          )}
        </VStack>
        <AppButton onClick={handleResetCompleted} type="button">
            Reset tracking
        </AppButton>
      </Container>
    </main>   
  )
}

export default App
