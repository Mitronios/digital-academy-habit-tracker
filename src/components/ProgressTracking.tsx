import { Box, Text, Checkbox, Progress, Flex, Icon} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

interface ProgressTrackingProps {
  onReset: boolean;
  onResetComplete: () => void;
  habitId: string;
}

const ProgressTracking = ({onReset, onResetComplete, habitId}: ProgressTrackingProps) => {

  const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];

  // localStorage key
  const PROGRESS_KEY_LSTorage = `progress_${habitId}`;

  const storedProgressStatus = () => {
    try {
      const storedProgress = localStorage.getItem(PROGRESS_KEY_LSTorage);
      return storedProgress ? JSON.parse(storedProgress) : new Array(daysOfWeek.length).fill(false);
    } catch (error) {
      console.error("Failed to get progress from localStorage", error);
      return new Array(daysOfWeek.length).fill(false);
    }
  }

  // State
  const [completedDays, setCompletedDays] = useState<boolean[]>(storedProgressStatus);

  // Progress control
  const totalDays = daysOfWeek.length;
  const completedCount = completedDays.filter(day => day).length;
  const progressValue = (completedCount / totalDays) * 100 // Percentage
  const sevenDaysStreak = completedCount === totalDays;

  // Efect to handle localStorage
  useEffect(() => {
    try {
      localStorage.setItem(PROGRESS_KEY_LSTorage, JSON.stringify(completedDays));
    } catch (error) {
      console.error("Failed to save the progress", error)
    }
  }, [completedDays, PROGRESS_KEY_LSTorage])

  // Efect to handle reset
  useEffect(() => {
    if (onReset) {
      setCompletedDays(new Array(totalDays).fill(false));
      localStorage.removeItem(PROGRESS_KEY_LSTorage);
      onResetComplete(); // The parent will now the reset is done
    }
  }, [onReset, totalDays, onResetComplete, PROGRESS_KEY_LSTorage])

  // handler
  const handleOnChangeCheckbox = (index: number) => {
    const newCompletedDays = [...completedDays];
    newCompletedDays[index] = !newCompletedDays[index]; // If true now false
    setCompletedDays(newCompletedDays);
  }
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" position="relative">
      <Text fontSize="lg" mb={3} 
      fontWeight="medium">
        Weekly Progress
      </Text>
      <Flex wrap="wrap" justify="space-evenly">
        {daysOfWeek.map((day, index) => (
          <Checkbox
            key={index}
            isChecked={completedDays[index]}
            onChange={() => handleOnChangeCheckbox(index)}
            colorScheme="green"
            size={{base:"sm", md: "md"}}
            mb="3"
          >
            {day}
          </Checkbox>
        ))}
      </Flex>

      <Box mt={4}>
        <Progress 
        value={progressValue} 
        size="md" colorScheme="green" 
        borderRadius="md" 
        bg="lightgray"
      />
      </Box>

      {sevenDaysStreak && (
        <Flex
          position="absolute"
          bottom="8px"
          right="8px"
          align="center"
          justify="center"
          boxSize="40px"
          bg="yellow.400"
          borderRadius="full"
          boxShadow="md"
        >
          <Icon as={FaStar} w={6} h={6} color="orange" />
        </Flex>
      )}
    </Box>
  );

}

export default ProgressTracking;
