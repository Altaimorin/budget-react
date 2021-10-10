import React from "react";
import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from "./EntryForm";

const NewEntryForm = ({
  addEntry, 
  setDescription, 
  setValue, 
  description, 
  value, 
  isExpense, 
  setIsExpense }) => {
  return (
    <Form unstackable>
      <EntryForm
        setDescription={setDescription}
        setValue={setValue}
        description={description}
        value={value}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <ButtonSaveOrCancel
        addEntry={addEntry}
      />
    </Form>
  )
}

export default NewEntryForm;