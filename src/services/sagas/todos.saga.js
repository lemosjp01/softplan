import baseAPI from '../../API/baseAPI';
import {
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodosFail,
} from '../reducers/todos.reducer';
import {take, put, call} from 'redux-saga/effects';

export function* fetchTodos() {
  const url = '/todos';

  try {
    const {data: todos} = yield call([baseAPI, 'get'], url);
    yield put(fetchTodosSuccess(todos));
  } catch (error) {
    yield put(fetchTodosFail({error}));
  }
}

export function* watchFetchTodos() {
  while (true) {
    const {
      payload: {},
    } = yield take(fetchTodosStart);
    yield call(fetchTodos, {});
  }
}
