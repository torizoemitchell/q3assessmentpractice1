import React, { Component } from 'react'
import './App.css'
import Header from './components/Header.js'
import MessageList from './components/MessageList.js'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      isLoaded: false,
      messages: [],
    }
  }

  async componentDidMount() {
    const response = await fetch(`https://toriq2assessment.herokuapp.com/messages`)
    const jsonResponse = await response.json()
    console.log("jsonResponse: ", jsonResponse)
    this.setState({
      ...this.state,
      messages: jsonResponse,
      isLoaded: true,
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        {this.state.isLoaded ? <MessageList messageInfo={this.state.messages}/> : "Loading..."}
      </div>
    );
  }
}

export default App;
