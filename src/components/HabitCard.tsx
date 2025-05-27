import {Card, CardHeader, CardBody, Box, Text, Flex} from "@chakra-ui/react"

interface HabitCardProps {
  habitName: string;
  color: string;  
}

const HabitCard = ({habitName, color}: HabitCardProps) => {
  return (
    <Card bg="white">
      <CardHeader pb="0" bg={color}>
        <Text fontSize="20px" fontWeight={"bold"} textAlign="center">
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