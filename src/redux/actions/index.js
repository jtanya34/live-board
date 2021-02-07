
import { fetch_sessions,set_session_variable } from './types';


export function getSessions(response) {
  
  return {
    type: fetch_sessions,
    payload: response
  };
}

export function set_sessions_variable(key,payload) {
  return {
    type: set_session_variable,
    payload: {
			key,
			payload,
		}
  };
}