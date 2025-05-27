import { Box, Text, Checkbox, Progress, Flex, Icon, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

interface ProgressTrackingProps {
  onReset: boolean;
  onResetComplete: () => void;
}

const ProgressTracking = ({onReset, onResetComplete}: ProgressTrackingProps) => {

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
  // State
  const [completedDays, setCompletedDays] = useState<boolean[]>(
    new Array(daysOfWeek.length).fill(false)
  );

  // Progress control
  const totalDays = daysOfWeek.length;
  const completedCount = completedDays.filter(day => day).length;
  const progressValue = (completedCount / totalDays) * 100 // Percentage
  const sevenDaysStreak = completedCount === totalDays;

  // Efect to handle reset
  useEffect(() => {
    if (onReset) {
      setCompletedDays(new Array(totalDays).fill(false));
      onResetComplete(); // The parent will now the reset is done
    }
  }, [onReset, totalDays, onResetComplete])

  // handler
  const handleOnChangeCheckbox = (index: number) => {
    const newCompletedDays = [...completedDays];
    newCompletedDays[index] = !newCompletedDays[index]; // If true now false
    setCompletedDays(newCompletedDays);
  }
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" position="relative">
      <Text fontSize="lg" mb={3} fontWeight="bold">Weekly Progress</Text>
      <HStack spacing={2}>
        {daysOfWeek.map((day, index) => (
          <Checkbox
            key={day}
            isChecked={completedDays[index]}
            onChange={() => handleOnChangeCheckbox(index)}
            colorScheme="green"
            size="lg"
          >
            {day}
          </Checkbox>
        ))}
      </HStack>

      <Box mt={4}>
        <Progress value={progressValue} size="md" colorScheme="green" borderRadius="md" />
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
