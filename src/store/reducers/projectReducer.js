const initState={
}

const projectReducer=(state=initState,action)=>{
	switch(action.type){
		case 'CREATE_PROJECT_SUCCESS':
			console.log('create project')
			return state;
		case 'CREATE_PROJECT_ERROR':
			console.log('create project error', action.err);
			return state;
		default:
		return state;
	}
};

export default projectReducer