import {Card, CardHeader, CardBody, Text, HStack, Box, IconButton, useDisclosure} from "@chakra-ui/react"
import ProgressTracking from "./ProgressTracking";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditHabitModal from "./EditHabitModal";

interface HabitCardProps {
  habitName: string;
  color: string;
  habitId: string;
  onEdit: (id: string, newName: string, newColor: string) => void;
  onDelete: (id: string) => void;
  onReset: boolean;
  onResetComplete: () => void;
}

const HabitCard = ({habitName, color, habitId, onEdit, onDelete, onReset, onResetComplete}: HabitCardProps) => {
  // Chakra modal handlers
  const editDisclosure = useDisclosure();

  // Handler for edit and dele
  const handleEditSave = (newName: string, newColor: string) => {
    onEdit(habitId, newName, newColor);
    editDisclosure.onClose();
  }

  return (
    <Box 
      position="relative"
      _hover={{ '.actions': { opacity: 1 } }}
    >
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

      {/*Edit-Delete Modal Buttons*/}
      <HStack
        className="actions"
        position="absolute"
        top={2}
        right={2}
        opacity={{base: 1, md:0}}
        transition="opacity 0.2s" 
      >
        <IconButton aria-label="Edit" 
          icon={<FaEdit/>}
          colorScheme="yellow"
          size="sm"
          onClick={editDisclosure.onOpen}

        />
        <IconButton aria-label="Delete"
          icon={<FaTrash/>}
          colorScheme="red"
          size="sm"
          onClick={() => {}}
        />
      </HStack>

      {/* Edit Modal */}
      <EditHabitModal
        isOpen={editDisclosure.isOpen}
        onClose={editDisclosure.onClose}
        initialName={habitName}
        initialColor={color}
        onSave={handleEditSave}
      />
    </Box>
  );
};

export default HabitCard;