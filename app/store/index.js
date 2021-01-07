import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import itemReducer  from './reducers/itemReducer'

const reducers = combineReducers({
    itemReducer
})

const middlewares = applyMiddleware(thunk)
const store = createStore(reducers, middlewares)

export default store