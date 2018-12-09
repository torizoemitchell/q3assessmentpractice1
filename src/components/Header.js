import React from 'react'
import{ Navbar, NavItem, Button } from 'react-materialize'
import './Header.css'
export default class Header extends React.Component {


  render(){
    const showCreateForm = this.props.showCreateForm
    return(
      <div className='container header'>
        <Navbar>
          <NavItem>
            <Button waves='light' onClick={(e) =>{e.preventDefault(); showCreateForm()}}>Create a Message</Button>
          </NavItem>
        </Navbar>
      </div>

    )
  }
}
