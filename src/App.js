import React, { Component } from 'react'
import './App.css'
import Header from './components/Header.js'
import MessageList from './components/MessageList.js'

class App extends Component {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     isLoaded: false,
  //     messages: [],
  //   }
  // }
  //
  // async componentDidMount() {
  //   const response = await fetch(`${process.env.REACT_APP_API_URL}messages`)
  //   const jsonResponse = await response.json()
  //   this.setState({
  //     ...this.state,
  //     messages: jsonResponse,
  //     isLoaded: true,
  //
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Header/>
        <MessageList/>
      </div>
    );
  }
}

export default App;
