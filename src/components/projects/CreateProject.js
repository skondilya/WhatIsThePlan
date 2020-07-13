import React, { Component } from 'react'
import { connect } from 'react-redux'
import createProject from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component{
	state={
		title:'',
		content:''
	}

	handleChange=(e)=>{
		const { target } = e;
		this.setState(state => ({
      	...state,
      	[target.id]: target.value,
    }));
	}

	handleSubmit=(e)=>{
		e.preventDefault();
		const { props, state } = this;
    	props.createProject(state);

    	props.history.push('/');
	}

	render(){
			const { auth } =this.props;
			if(!auth.uid) return <Redirect to='/signin'/>
			return (
		<div className="container">
			<form className="white" onSubmit={this.handleSubmit}>
			<h4>Create A new Project</h4>
				<div className="input-field">
					<input type="text" id="title" onChange={this.handleChange}/>
					<label htmlFor="title">Project title</label>
				</div>

				<div className="input-field">
					<textarea className="materialize-text-area" id="content" onChange={this.handleChange}></textarea>
					<label htmlFor="content">Project content</label>
				</div>

				<div>
					<button className="btn teal lighten-1">Create</button>
				</div>
			</form>
		</div>
		)

	}

}

const mapStateToProps=(state)=>{
	return{
		auth: state.firebase.auth
	}
}

const mapDispatchToProps= dispatch=>({
		createProject: (project)=> dispatch(createProject(project))
});

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)