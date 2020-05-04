import {combineReducers} from 'redux'
import number from './Number'
import status from './Status'
var reducer = combineReducers({
      Number: number,
      Status: status
})

export default reducer