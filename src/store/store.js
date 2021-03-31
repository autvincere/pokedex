import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { pokeReducer } from '../reducers/pokeReducer'

// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const reducers = combineReducers({
//      pokemones: pokeReducer,
//      favoriteCharacters: [],
// })
const initialState = {
     favoriteCharacters: [],
   };

export const store = createStore( pokeReducer,initialState, composeEnhancers( applyMiddleware(thunk)))