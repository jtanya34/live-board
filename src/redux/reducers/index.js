import { combineReducers } from 'redux';
import sessions from './sessions';


const appReducer = combineReducers({
	sessions
});

const rootReducer = (state, action) => {
	
	return appReducer(state, action);
};

export default rootReducer;
