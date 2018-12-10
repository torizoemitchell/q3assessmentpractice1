import React from 'react'
import { Row, Input, Button } from 'react-materialize'


export default class UpdateMessageForm extends React.Component {

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
    // console.log("name: ", this.state.name)
    // console.log("message: ", this.state.message)
    // const submitMessage = this.props.submitMessage
    const {
      updateMessage,
      id,
      name,
      message
    } = this.props
    return(
      <form onSubmit={(e) => {e.preventDefault(); updateMessage(id, this.state)}}>
        <Row className='container'>
          <Row>
            <Input required s={6}
              label="Name"
              defaultValue={name}
              onChange={(e, value) => {this.updateForm(value, 'name')}}
            />
            <Input required s={12}
              type="textarea"
              label="Message"
              defaultValue={message}
              onChange={(e, value) => {this.updateForm(value, 'message')}}
            />
          </Row>
          <Button type='submit' waves='light'>Submit</Button>
        </Row>
      </form>
    )
  }
}
