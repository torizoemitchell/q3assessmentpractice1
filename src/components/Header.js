import React from 'react'
import{ Navbar, NavItem, Button } from 'react-materialize'

export default class Header extends React.Component {


  render(){
    return(
      <div className='container'>
        <Navbar>
          <NavItem>
            <Button waves='light'>Create a Message</Button>
          </NavItem>
        </Navbar>
      </div>

    )
  }
}
