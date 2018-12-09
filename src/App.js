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

  updateMessage = (id) => {
    console.log("updateMessage: ", id)
  }

  deleteMessage = (id) => {
    console.log("deleteMessage: ", id)
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
