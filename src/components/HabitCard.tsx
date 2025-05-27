import {Card, CardHeader, CardBody, Text} from "@chakra-ui/react"

interface HabitCardProps {
  habitName: string;
  color: string;  
}

const HabitCard = ({habitName, color}: HabitCardProps) => {
  return (
    <Card bg="white"
    marginBottom={2}
    >
      <CardHeader pl="5" bg={color}>
        <Text fontSize="20px" 
        fontWeight={"bold"} 
        textAlign="start"
        textShadow='1px 1px rgb(52, 51, 51)'
        marginBottom={3}
        textColor="white"
        >
          {habitName}
          </Text>
      </CardHeader>
      <CardBody>
        {/* TODO: Checkboxes */}
      </CardBody>
    </Card>
  );
};

export default HabitCard;