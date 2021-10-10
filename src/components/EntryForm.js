import React from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";

const EntryForm = ({setDescription, setValue, description, value, isExpense, setIsExpense }) => {
  return (
    <>
      <Form.Group>
        <Form.Input
          icon='tags'
          width={12}
          label='Description'
          placeholder='new shinny thing'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></Form.Input>
        <Form.Input
          icon='dollar'
          width={4}
          label='Value'
          placeholder='100.00'
          iconPosition='left'
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></Form.Input>
      </Form.Group>
      <Segment compact>
        <Checkbox label='is expense' checked={isExpense} onChange={() => setIsExpense(!isExpense)} />
      </Segment>
    </>
  )
}

export default EntryForm