/* eslint no-shadow: ["error", { "allow": ["todos"] }]*/
import {createActions, handleActions} from 'redux-actions';

const defaultState = {
  error: null,
  data: null,
  isLoading: true,
};

export const {
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodosFail,
} = createActions({
  FETCH_TODOS_START: () => ({}),
  FETCH_TODOS_SUCCESS: todos => ({todos}),
  FETCH_TODOS_FAIL: error => ({error}),
});

export const todos = handleActions(
  {
    [fetchTodosStart]: state => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [fetchTodosSuccess]: (state, {payload: {todos}}) => ({
      error: null,
      isLoading: false,
      data: todos,
    }),
    [fetchTodosFail]: (state, {payload: {error}}) => ({
      error,
      isLoading: false,
      data: [],
    }),
  },
  defaultState,
);
