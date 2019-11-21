import {users} from './users.reducer';
import {todos} from './todos.reducer';
import {combineReducers} from 'redux';

const reducers = combineReducers({
  users,
  todos,
});

export default reducers;
