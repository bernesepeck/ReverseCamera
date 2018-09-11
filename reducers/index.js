//Combines all the Reducers and makes a Roote Reducer
import { combineReducers } from 'redux'
import imageReducer from './images'

export default combineReducers({
  imageReducer
})