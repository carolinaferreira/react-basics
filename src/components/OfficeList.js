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

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ 
      officers:[...this.state.officers, this.state.newOfficer] ,
      newOfficer: ''
    });
  }

  render(){
    return (
    <form onSubmit={this.handleSubmit}>
      <ul>
        {this.state.officers.map(office => <li key={office}>{office}</li>)}
      </ul>
      <input 
        type="text"
        onChange={this.handleInputChange} 
        value={this.state.newOfficer}
      />
      <button type="submit">Enviar</button>
    </form>
    )
  }
}

export default OfficeList;