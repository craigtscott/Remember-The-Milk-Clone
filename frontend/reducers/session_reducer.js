
import {
  RECEIVE_CURRENT_USER,
  LOGOUT,
  RECEIVE_ERRORS } from '../actions/session_action';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, { currentUser });
    case LOGOUT:
      return merge({}, _nullUser);
    case RECEIVE_ERRORS:
      return merge({}, _nullUser, {errors: action.errors});
    default:
      return state;
  }
};
export default SessionReducer;
