import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoReducer from './reducers/todoReducer';

const store = createStore(todoReducer, composeWithDevTools());
console.dir(store);
// console.log(store.getState());
// console.log(store.dispatch);

export default store;
