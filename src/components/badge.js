import React, { Component } from 'react'
import './styles/badge.css'
import deer from '../images/deer.svg' 

class Badge extends Component{
	render(){
		return(
			<div className="targetContainer">
				<div>
					<img src={deer} alt="Logo" className="image-logo"/>
				</div>

				<div className="userInfoContainer">
					<img src="" alt="avatar" className="image-user"/>
					<h1>Nombre <br/> Apellido</h1> 
				</div>

				<div className="footer">
					<p>footer</p>
				</div>
			</div>
		)
	}
}

export default Badge
