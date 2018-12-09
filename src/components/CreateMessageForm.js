import React from 'react'
import { Row, Input, Button } from 'react-materialize'
import './CreateMessageForm.css'

export default class CreateMessageForm extends React.Component {

  state = {
    name: '',
    message: ''
  }




  render(){
    return(
      <Row className='container form'>
        <Row >
          <Input s={6} label="Name" />
          <Input type="textarea" label="Message" s={12} />
        </Row>
        <Button waves='light'>Add Message</Button>
      </Row>
    )
  }
}
