import { combineReducers } from 'redux';
import listReducer from './list';
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const rootReducer = combineReducers({
    listReducer,
});

export default rootReducer;
