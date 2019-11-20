/* eslint no-shadow: ["error", { "allow": ["users"] }]*/
import {createActions, handleActions} from 'redux-actions';

const defaultState = {
  error: null,
  data: null,
  isLoading: true,
};

export const {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFail,
} = createActions({
  FETCH_CURRENT_ASSIGNMENT_START: params => ({params}),
  FETCH_CURRENT_ASSIGNMENT_SUCCESS: users => ({users}),
  FETCH_CURRENT_ASSIGNMENT_FAIL: error => ({error}),
});

export const users = handleActions(
  {
    [fetchUsersStart]: state => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [fetchUsersSuccess]: (state, {payload: {users}}) => ({
      error: null,
      isLoading: false,
      data: users,
    }),
    [fetchUsersFail]: (state, {payload: {error}}) => ({
      error,
      isLoading: false,
      data: [],
    }),
  },
  defaultState,
);
