import { createStore, combineReducers, applyMiddleware } from 'redux';  
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todosReducers } from './reducers/todosReducer';
import { tabReducer } from './reducers/tabReducer';
const reducer = combineReducers({
    todos: todosReducers,
    currentTab: tabReducer
})

const middleWare =  [thunk];

const store = createStore(
     reducer,
     composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;