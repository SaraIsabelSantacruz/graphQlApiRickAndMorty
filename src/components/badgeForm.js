import React, {Component} from 'react'

class BadgeForm extends Component{

	render(){
		return(
			<form onSubmit={this.props.handleSubmit}>
				<div className="form-group">
					<label>Change Name</label>
					<input 
						onChange={ this.props.handleChange } 
						className="changeName" 
						type="text" 
						name="changeName"
						value = {this.props.formValue.changeName}
					/>
					<input 
						onChange={ this.props.handleChange } 
						className="changeLastName" 
						type="text" 
						name="changeLastName"
						value = {this.props.formValue.changeLastName}
					/>
				</div>
				<button onClick = { this.props.handleOnClick }> Save </button>
			</form>
		)
	}
}

export default BadgeForm