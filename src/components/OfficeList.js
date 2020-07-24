import React, {Component} from 'react';

class OfficeList extends Component {
  state={
    officers: [
      'Angela',
      'Dwight',
      'Jim',
      'Michael',
      'Pam',
    ]
  }
  render(){
    return (
      <ul>
        {this.state.officers.map(office => <li key={office}>{office}</li>)}
      </ul>
    )
  }
}

export default OfficeList;