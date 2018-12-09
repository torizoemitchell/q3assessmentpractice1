import React from 'react'
import { Table } from 'react-materialize'
import Message from './Message.js'

export default class Header extends React.Component {


  render(){
    // console.log("this.props: ", this.props)
    const messageInfo = this.props.messageInfo
    // console.log("messageInfo: ", messageInfo)
    return(
      <div className='container'>
        <Table>
          <thead>
            <tr>
              <th data-field='name'>Name: </th>
              <th data-field='message'>Message: </th>
              <th data-field='update'>Update: </th>
              <th data-field='delete'>Delete: </th>
            </tr>
          </thead>
          <tbody>
            {messageInfo.map((message, i) => <Message key={i} messageInfo={messageInfo[i]}/>)}
          </tbody>
        </Table>
      </div>

    )
  }
}
