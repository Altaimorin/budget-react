import { Modal, Button } from 'semantic-ui-react';
import EntryForm from './EntryForm';

const ModalEdit = ({
  isOpen,
  setIsOpen,
  addEntry,
  setDescription,
  setValue,
  description,
  value,
  isExpense,
  setIsExpense
}) => {
  return <Modal open={isOpen}>
    <Modal.Header>Edit entry</Modal.Header>
    <Modal.Content>
      <EntryForm 
        setDescription={setDescription}
        setValue={setValue}
        description={description}
        value={value}
        isExpense={isExpense}
        setIsExpense={setIsExpense} 
      />
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={() => setIsOpen(false)}>Close</Button>
      <Button onClick={()=>setIsOpen(false)} primary>OK</Button>
    </Modal.Actions>
  </Modal>;
}

export default ModalEdit;