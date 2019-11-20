import {users} from './users.reducer';
import {combineReducers} from 'redux';

const reducers = combineReducers({
  users,
});

export default reducers;
