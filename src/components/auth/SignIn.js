import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
	state={
		email:'',
		password:''
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.id]:e.target.value
		})
	}
	handleSubmit=(e)=>{
		e.preventDefault();
		this.props.signIn(this.state)
	}

	render(){
		const { authError,auth }= this.props;
		if (auth.uid) return <Redirect to="/" />
		return(
			<div className="container">
			<form className="white sign" onSubmit={this.handleSubmit}>
			<h4 className="grey-text">Sign In</h4>

				<div className="input-field">
					<label class="active" htmlFor="email">Email</label>
					<input type="email" id="email" onChange={this.handleChange}/>
				</div>

				<div className="input-field">
					<label class="active" htmlFor="password">Password</label>
					<input type="password" id="password" onChange={this.handleChange}/>
				</div>

				<div className="input-field">
					<button className="btn teal lighten-1">Login</button>
				</div>
				<div className="center red-text">
				 {authError ? <p>{authError}</p>:null}
				</div>
			</form>
			</div>
			)
	}
}

const mapStateToProps=(state)=>{
	return {
		authError: state.auth.authError,
		auth: state.firebase.auth
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		signIn: (creds)=>dispatch(signIn(creds))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)