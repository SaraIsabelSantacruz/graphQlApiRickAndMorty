import React, { Component } from 'react';
import './App.css';
import Badge from './components/badge'
import BadgeForm from './components/badgeForm';

class App extends Component {
  
  state = {
    form: {
      changeName: "",
      changeLastName: ""
    }
  }

  handleChange = e => {
    this.setState({
      form:{ ...this.state.form, [e.target.name]: e.target.value }
    })
  }

  handleOnClick = even => {
		console.log(even.target)
	}

	handleSubmit = elem => {
		elem.preventDefault()
	}

  render(){
    return (
      <div className="App">
        <Badge/>
        <BadgeForm 
          handleChange = { this.handleChange }  
          handleOnClick = { this.handleOnClick } 
          handleSubmit = { this.handleSubmit }
          formValue = {this.state.form}
        />    
      </div>
    )
  }
}

export default App;
