import {set_session_variable } from '../actions/types';

var initialState = {
	sessions_list_status:'none',
  sessions_list_response:{},
  
};

const set_sessions_variable = (state, payload) => {

	return {
		...state,
		[payload.key]: payload.payload
	};
};

export default function(state = initialState, action) {
  switch (action.type) {
    case set_session_variable:
      return set_sessions_variable(state,action.payload);
    default:
      return state;
  }
}