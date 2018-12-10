import React from 'react'
import { Button, Modal } from 'react-materialize'
import UpdateMessageForm from './UpdateMessageForm.js'

export default class Message extends React.Component {


  render(){
    // console.log("this.props.messageInfo :", this.props.messageInfo)
    const {
      messageInfo,
      updateMessage,
      deleteMessage,
      id
    } = this.props
    // const updateMessage = this.props.updateMessage
    // const deleteMessage = this.props.deleteMessage
    //console.log(this.props)
    return(
      <tr>
        <td>{messageInfo.name}</td>
        <td>{messageInfo.message}</td>

        <td>
          <Modal
            header='Edit Message: '
            trigger={<Button>Edit Message</Button>}>
            <UpdateMessageForm
              updateMessage={updateMessage}
              id={id}
              name={messageInfo.name}
              message={messageInfo.message}
            />
          </Modal>
        </td>
        <td><Button
          waves='light'
          onClick={(e) => {e.preventDefault(); deleteMessage(id)}}
        >Delete</Button></td>
      </tr>
    )
  }
}
