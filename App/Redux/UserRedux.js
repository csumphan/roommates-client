import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['credential'],
  loginSuccess: ['user', 'token'],
  loginFailure: ['error']
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */
const newUser = {
  email: '',
  name: '',
  password: '',
  passwordConfirm: ''
};
export const INITIAL_STATE = Immutable({
  user: null,
  data: null,
  fetching: null,
  payload: null,
  error: null,
  newUser
})

/* ------------- Selectors ------------- */

export const UserSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const loginRequest = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const loginSuccess = (state, action) => {
  const { user, token} = action
  return state.merge({ fetching: false, error: null, user, token})
}

// Something went wrong somewhere.
export const loginFailure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure
})
