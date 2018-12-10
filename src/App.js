import React, { Component } from 'react'
import './App.css'
import Header from './components/Header.js'
import MessageList from './components/MessageList.js'
import CreateMessageForm from './components/CreateMessageForm.js'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      isLoaded: false,
      messages: [],
      createFormShowing: false
    }
  }

  async componentDidMount() {
    const response = await fetch(`https://toriq2assessment.herokuapp.com/messages`)
    const jsonResponse = await response.json()
    //console.log("jsonResponse: ", jsonResponse)
    this.setState({
      ...this.state,
      messages: jsonResponse,
      isLoaded: true,
    })
  }

  showCreateForm = () => {
    this.setState({
      ...this.state,
      createFormShowing: !this.state.createFormShowing
    })
  }

  submitMessage = async(message) => {
    //console.log("submit: ", message)
    const response = await fetch(`https://toriq2assessment.herokuapp.com/messages`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message)
    })
    const jsonResponse = await response.json()
    console.log("jsonResponse to POST: ", jsonResponse)
    this.setState({
      ...this.state,
      messages: [
        ...this.state.messages,
        jsonResponse
      ],
      createFormShowing: false
    })
  }

  findMessageIndex = (id) => {
    const messages = this.state.messages
    for(let i = 0; i < messages.length; i++){
      if(messages[i].id === id){
        return i
      }
    }
    return -1
  }

  updateMessage = async(id, message) => {
    console.log("updateMessage: ", id, message)
    const response = await fetch(`https://toriq2assessment.herokuapp.com/messages/${id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message)
    })
    const jsonResponse = await response.json()
    console.log("jsonResponse to PATCH: ", jsonResponse)
    const index = this.findMessageIndex(jsonResponse.id)
    console.log("index: ", index)
    console.log("this.state.messages: ", this.state.messages)

    this.setState({
      ...this.state,
      messages: [
        ...this.state.messages.slice(0, index),
        jsonResponse,
        ...this.state.messags.slice(index + 1)
      ]
    })
  }

  deleteMessage = async(id) => {
    console.log("deleteMessage: ", id)
    const response = await fetch(`https://toriq2assessment.herokuapp.com/messages/${id}`, {
      method: 'DELETE',
    })
    const jsonResponse = await response.json()
    console.log("jsonResponse to DELETE: ", jsonResponse)
    const index = this.findMessageIndex(id)
    console.log("index: ", index)
    this.setState({
      ...this.state,
      messages: [
        ...this.state.messages.slice(0, index),
        ...this.state.messages.slice(index + 1)
      ],
      createFormShowing: false
    })
  }

  render() {
    return (
      <div className="App">
        <Header showCreateForm={this.showCreateForm}/>
        {this.state.createFormShowing ? <CreateMessageForm submitMessage={this.submitMessage}/> : ''}
        {this.state.isLoaded ? <MessageList
          messageInfo={this.state.messages}
          updateMessage={this.updateMessage}
          deleteMessage={this.deleteMessage}
        /> : "Loading..."}
      </div>
    );
  }
}

export default App;
