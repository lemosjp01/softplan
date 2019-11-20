import baseAPI from '../../API/baseAPI';
import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFail,
} from '../reducers/users.reducer';
import {take, put, call} from 'redux-saga/effects';

export function* fetchUsers(params) {
  const url = `/users`;

  try {
    const {data: users} = yield call([baseAPI, 'get'], url);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFail({error}));
  }
}

export function* watchFetchUsers() {
  while (true) {
    const {payload: params} = yield take(fetchUsersStart);
    yield call(fetchUsers, params);
  }
}
