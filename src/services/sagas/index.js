import {watchFetchUsers} from './users.saga';
import {watchFetchTodos} from './todos.saga';
import {all} from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([watchFetchUsers(), watchFetchTodos()]);
}
