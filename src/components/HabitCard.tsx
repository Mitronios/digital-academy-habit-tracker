import {Card, CardHeader, CardBody, Box, Text, Flex} from "@chakra-ui/react"

interface HabitCardProps {
  habitName: string;
  color: string;  
}

const HabitCard = ({habitName, color}: HabitCardProps) => {
  return (
    <Card boxShadow="md" bg="white">
      <CardHeader pb="0">
      <Flex alignItems="center">
        <Box boxSize="20px" borderRadius="full" bg={color} mr={3}/>
        <Text fontSize="20px" fontWeight={"semibold"}>
          {habitName}
          </Text>
      </Flex>
      </CardHeader>
      <CardBody>
        {/* TODO: Checkboxes */}
      </CardBody>
    </Card>
  );
};

export default HabitCard;