import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import listingsReducer from './listingsReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

const reducer = combineReducers({
    listings: listingsReducer,
})

const store = createStore(
    reducer, composeEnhancers(applyMiddleware(thunk))
)

export default store;