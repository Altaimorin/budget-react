import React from "react";
import {Form} from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

const NewEntryForm = () => {
  return (
    <Form unstackable>
        <Form.Group>
          <Form.Input
            icon='tags'
            width={12}
            label='Description'
            placeholder='new shinny thing'
          ></Form.Input>
          <Form.Input
            icon='dollar'
            width={4}
            label='Value'
            placeholder='100.00'
            iconPosition='left'
          ></Form.Input>
        </Form.Group>
        <ButtonSaveOrCancel/>
      </Form>
  )
}

export default NewEntryForm;