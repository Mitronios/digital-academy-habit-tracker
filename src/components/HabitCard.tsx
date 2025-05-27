import {Card, CardHeader, CardBody, Text} from "@chakra-ui/react"
import ProgressTracking from "./ProgressTracking";

interface HabitCardProps {
  habitName: string;
  color: string;
  habitId: string;
}

const HabitCard = ({habitName, color, habitId, ...rest}: HabitCardProps) => {
  return (
    <Card bg="white"
    marginBottom={2}
    boxShadow="dark-lg"
    >
      <CardHeader pl="5" bg={color}>
        <Text fontSize="20px" 
        fontWeight={"bold"} 
        textAlign="start"
        textShadow='1px 1px rgb(83, 82, 82)'
        marginBottom={3}
        textColor="#433E28"
        >
          {habitName}
          </Text>
      </CardHeader>
      <CardBody>
        <ProgressTracking 
        onReset={false} 
        onResetComplete={() => {}} 
        habitId={habitId}
        />
        
      </CardBody>
    </Card>
  );
};

export default HabitCard;