import React from 'react'
import { Row, Input, Button } from 'react-materialize'
import './CreateMessageForm.css'

export default class CreateMessageForm extends React.Component {

  state = {
    name: '',
    message: ''
  }

  updateForm = (str, field) => {
    this.setState({
      ...this.state,
      [field]: str
    })
  }



  render(){
    console.log("name: ", this.state.name)
    console.log("message: ", this.state.message)
    const submitMessage = this.props.submitMessage
    return(
      <form onSubmit={(e) => {e.preventDefault(); submitMessage(this.state)}}>
        <Row className='container form'>
          <Row>
            <Input required s={6} label="Name" onChange={(e, value) => {this.updateForm(value, 'name')}}/>
            <Input required type="textarea" label="Message" s={12} onChange={(e, value) => {this.updateForm(value, 'message')}}/>
          </Row>
          <Button type='submit' waves='light'>Submit</Button>
        </Row>
      </form>
    )
  }
}
