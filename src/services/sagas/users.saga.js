import baseAPI from '../../API/baseAPI';
import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFail,
} from '../reducers/users.reducer';
import {take, put, call} from 'redux-saga/effects';

export function* fetchUsers() {
  const url = '/users';

  try {
    const {data: users} = yield call([baseAPI, 'get'], url);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFail({error}));
  }
}

export function* watchFetchUsers() {
  while (true) {
    const {
      payload: {},
    } = yield take(fetchUsersStart);
    yield call(fetchUsers, {});
  }
}
