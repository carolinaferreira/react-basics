import React, {Component} from 'react';

class OfficeList extends Component {
  state={
    newOfficer: '',
    officers: [
      'Angela',
      'Dwight',
      'Jim',
      'Michael',
      'Pam',
    ]
  }
  handleInputChange = e =>{
    this.setState({ newOfficer: e.target.value})
  }

  render(){
    return (
    <>
      <h1>{this.state.newOfficer}</h1>
      <ul>
        {this.state.officers.map(office => <li key={office}>{office}</li>)}
      </ul>
      <input type="text" onChange={this.handleInputChange} />
    </>
    )
  }
}

export default OfficeList;