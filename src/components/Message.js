import React from 'react'
import { Button, Modal } from 'react-materialize'

export default class Message extends React.Component {


  render(){
    // console.log("this.props.messageInfo :", this.props.messageInfo)
    const messageInfo = this.props.messageInfo
    const updateMessage = this.props.updateMessage
    const deleteMessage = this.props.deleteMessage
    //console.log(this.props)
    return(
      <tr>
        <td>{messageInfo.name}</td>
        <td>{messageInfo.message}</td>

        <td>
          <Modal
            header='Update'
            trigger={<Button>Update</Button>}>
            <p>form here</p>
          </Modal>
        </td>
        <td><Button
          waves='light'
          onClick={(e) => {e.preventDefault(); deleteMessage(this.props.id)}}
        >Delete</Button></td>
      </tr>
    )
  }
}
