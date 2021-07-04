import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { selectedReducer } from './selectedReducer';


export const getRootReducer = state => state;

const rootReducer = combineReducers({
    selected : selectedReducer
});

export const configureStore = () => {
    return createStore(rootReducer, composeWithDevTools(applyMiddleware()));
};

export default rootReducer;