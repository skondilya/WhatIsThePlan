import React,{ Component } from 'react'
import ProjectList from '../projects/ProjectList'
import UserDetails from './UserDetails'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component{
	render(){
		console.log(this.props);
		const {projects, auth,profile} = this.props;
		if(!auth.uid) return <Redirect to='/signin'/>

		return (
		<div className="container">

		<div className="row">
			<div className="col s3">
				<UserDetails profile={profile}/>
			</div>

			<div className="col s9">
				<ProjectList projects={projects}/>
			</div>

		</div>
		</div>
		);
	}
}

const mapStateToProps = (state) =>{
	console.log(state)
	return {
		projects: state.firestore.ordered.projects,
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}

export default compose(
	connect(mapStateToProps),
		firestoreConnect([
			{collection:'projects', orderBy: ['createdAt', 'desc']}
		])
)(Dashboard)
