import React, {Component} from 'react';
import OfficerItem from './OfficerItem';

class OfficeList extends Component {
  state={
    newOfficer: '',
    officers: []
  }

  componentDidMount(){
    const officers = localStorage.getItem('officers');

    if (officers){
      this.setState({ officers: JSON.parse(officers)});
    }
  }

  componentDidUpdate(_, prevState){
    if(prevState != this.state.officers){
      localStorage.setItem('officers', JSON.stringify(this.state.officers))
    }
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

  handleDelete = (officer) =>{
    this.setState({ officers: this.state.officers.filter( o => o != officer)});
  }

  render(){
    return (
    <form onSubmit={this.handleSubmit}>
      <ul>
        {this.state.officers.map(officer => (
          <OfficerItem 
            key={officer} 
            officer={officer}
            onDelete={() => this.handleDelete(officer)}
            />))}
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