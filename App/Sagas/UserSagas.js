import { call, put } from 'redux-saga/effects'
import UserActions from '../Redux/UserRedux'
// import { UserSelectors } from '../Redux/UserRedux'

export function * getUser (api, action) {
  const { data } = action
  // get current data from Store
  // const currentData = yield select(UserSelectors.getData)
  // make the call to the api
  const response = yield call(api.getuser, data)

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(UserActions.userSuccess(response.data))
  } else {
    yield put(UserActions.userFailure())
  }
}

export function * loginUser (api, action) {
  const { credential } = action
  console.log('sagas', credential)
  const response = yield call(api, credential)

  console.log('response', response)
  if (response.ok) {
    console.log('logged in')
  }
}

export default {
  loginUser
}
