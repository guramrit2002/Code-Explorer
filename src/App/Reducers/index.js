import {combineReducers} from 'redux'
import componentReducer from './componentReducer'

const rootReducer = combineReducers({
    component : componentReducer,
})

export default rootReducer