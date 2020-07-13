import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'


class SignUp extends Component{
	state={
		email:'',
		password:'',
		firstName:'',
		lastName:''
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.id]:e.target.value
		})
	}
	handleSubmit=(e)=>{
		e.preventDefault();
		this.props.signUp(this.state);
	}
	render(){
		const { auth,authError }= this.props;
		if(auth.uid) return <Redirect to='/' />

		return (
			<div className="container">
				<form className="white" onSubmit={this.handleSubmit}>
				<h4 className="grey-text">Sign Up</h4>
					<div className="input-field">
						<label class="active" htmlFor="email">Email</label>
						<input type="email" id="email" onChange={this.handleChange}/>
					</div>

					<div className="input-field">
						<label class="active" htmlFor="password">Password</label>
						<input type="password" id="password" onChange={this.handleChange}/>
					</div>

					<div className="input-field">
						<label class="active" htmlFor="firstName">First Name</label>
						<input type="text" id="firstName" onChange={this.handleChange}/>
					</div>

					<div className="input-field">
						<label class="active" htmlFor="lastName">Last Name</label>
						<input type="text" id="lastName" onChange={this.handleChange}/>
					</div>

					<div className="input-field">
						<button className="btn teal lighten-2">Sign Up</button>
						<div className="">
						{ authError ? <p>{authError}</p>:null}
						</div>
					</div>
				</form>
			</div>
			)
	}
}

const mapStateToProps=(state)=>{
	return {
		auth:state.firebase.auth,
		authError:state.auth.authError
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		signUp: (creds)=>dispatch(signUp(creds))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)