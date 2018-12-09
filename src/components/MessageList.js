import React from 'react'
import{ Table } from 'react-materialize'

export default class Header extends React.Component {


  render(){
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
        </Table>
      </div>

    )
  }
}
