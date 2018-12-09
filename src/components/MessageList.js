import React from 'react'
import { Table } from 'react-materialize'
import Message from './Message.js'

export default class Header extends React.Component {


  render(){
    // console.log("this.props: ", this.props)
    const messageInfo = this.props.messageInfo
    const updateMessage = this.props.updateMessage
    const deleteMessage = this.props.deleteMessage
    console.log("MessageInfo: ", messageInfo)
    return(
        <Table className='container'>
          <thead>
            <tr>
              <th data-field='name'>Name: </th>
              <th data-field='message'>Message: </th>
              <th data-field='update'></th>
              <th data-field='delete'></th>
            </tr>
          </thead>
          <tbody>
            {messageInfo.map((message, i) => <Message key={i}
              messageInfo={messageInfo[i]}
              updateMessage={updateMessage}
              deleteMessage={deleteMessage}
              id={messageInfo[i].id}
            />)}
          </tbody>
        </Table>


    )
  }
}
