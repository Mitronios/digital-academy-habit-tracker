import { Box, Text, Stack, Checkbox, Progress, Flex, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface ProgressTrackingProps {
  onReset: boolean;
  onResetComplete: () => void;
}

const ProgressTracking = ({onReset, onResetComplete}: ProgressTrackingProps) => {

  const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];
  
  // State
  const [completedDays, setCompletedDays] = useState<boolean[]>(
    new Array(daysOfWeek.length).fill(false)
  );

  // Progress control
  const totalDays = daysOfWeek.length;
  const completedCount = completedDays.filter(day => day).length;
  const progressValue = (completedCount / totalDays) * 100 // Percentage
  const sevenDaysStreak = completedCount === totalDays;

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" position="relative">
      <Text fontSize="lg" mb={3} fontWeight="bold">Weekly Progress</Text>
      <Stack spacing={2}>
        {daysOfWeek.map((day, index) => (
          <Checkbox
            key={day}
            isChecked={completedDays[index]}
            onChange={() => {}}
            colorScheme="green"
            size="lg"
          >
            {day}
          </Checkbox>
        ))}
      </Stack>

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
          <Icon as={FaStar} w={6} h={6} color="white" />
        </Flex>
      )}
    </Box>
  );

}

export default ProgressTracking;
