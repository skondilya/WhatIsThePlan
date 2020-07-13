import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	firebase: firebaseReducer,
    firestore: firestoreReducer,
	auth: authReducer,
	project: projectReducer
});

export default rootReducer