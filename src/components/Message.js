import React from 'react'
import { Button } from 'react-materialize'

export default class Message extends React.Component {


  render(){
    // console.log("this.props.messageInfo :", this.props.messageInfo)
    const messageInfo = this.props.messageInfo
    return(
      <tr>
        <td>{messageInfo.name}</td>
        <td>{messageInfo.message}</td>
        <td><Button waves='light'>Update</Button></td>
        <td><Button waves='light'>Delete</Button></td>
      </tr>
    )
  }
}
