import { Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalCloseButton, 
  ModalBody, 
  Input, 
  Select, 
  ModalFooter, 
  Button } 
  from "@chakra-ui/react";

interface EditHabitModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialName: string;
  initialColor: string;
  onSave: (newName: string, newColor: string) => void;
}
  

const EditHabitModal = ({isOpen, onClose, initialName, 
  initialColor, onSave }: EditHabitModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Habit</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Habit name"
            value=""
            mb={3}
          />
          <Select>
            <option value="pink.100">Pink</option>
            <option value="blue.100">Blue</option>
            <option value="green.100">Green</option>
            <option value="yellow.100">Yellow</option>
          </Select>
        </ModalBody>
        <ModalFooter>
          <Button mr={3}>
            Cancel
          </Button>
          <Button colorScheme="teal">
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );

}

export default EditHabitModal;

