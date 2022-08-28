import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { articleReducer } from './reducers/articleReducer';

import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    articles: articleReducer
});
const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer);

const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;
