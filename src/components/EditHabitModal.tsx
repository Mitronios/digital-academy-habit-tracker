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
import { useState } from "react";

interface EditHabitModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialName: string;
  initialColor: string;
  onSave: (newName: string, newColor: string) => void;
}
  

const EditHabitModal = ({isOpen, onClose, initialName, 
  initialColor, onSave }: EditHabitModalProps) => {

    // States for edit
    const [newName, setNewName] = useState(initialName);
    const [newColor, setNewColor] = useState(initialColor);

    // Handlers for edit
    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewName(event.target.value);
    
    }
    const onChangeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setNewColor(event.target.value);
    }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Habit</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Habit name"
            value={newName}
            mb={3}
            onChange={onChangeName}
          />
          <Select
            value={newColor}
            onChange={onChangeColor}
          >
            <option value="#FF746C">1</option>
            <option value="#83CCD2">2</option>
            <option value="#F68BA2">3</option>
            <option value="#E2CF88">4</option>
            <option value="#D8B0C8">5</option>
          </Select>
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="teal" onClick={() => onSave(newName, newColor)}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );

}

export default EditHabitModal;

