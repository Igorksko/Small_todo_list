import {getTasks} from "../api";

import {takeLatest, put, call, all, select} from "redux-saga/effects";

const GET_TASKS_BY_PAGE = "GET_TASKS_BY_PAGE";
const GET_TASKS_BY_SORT_FIELD = "GET_TASKS_BY_SORT_FIELD";
const GET_TASKS_BY_SORT_DIRECTION = "GET_TASKS_BY_SORT_DIRECTION";
const GET_TASKS_BY_ALL_FIELDS = "GET_TASKS_BY_ALL_FIELDS";
const GET_TASKS_BY_PAGE_SUCCESS = "GET_TASKS_BY_PAGE_SUCCESS";
const GET_TASKS_BY_SORT_FIELD_SUCCESS = "GET_TASKS_BY_SORT_FIELD_SUCCESS";
const GET_TASKS_BY_SORT_DIRECTION_SUCCESS = "GET_TASKS_BY_SORT_DIRECTION_SUCCESS";
const GET_TASKS_BY_ALL_FIELDS_SUCCESS = "GET_TASKS_BY_ALL_FIELDS_SUCCESS";
const TASKS__LOAD_FAILURE = "TASKS__LOAD_FAILURE";

const initialState = {
  taskList: null,
  totalTasks: null,
  page: null,
  sortField: "id",
  sortDirection: "asc",
  error: null,
  loading: false
};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS_BY_PAGE:
    case GET_TASKS_BY_SORT_FIELD:
    case GET_TASKS_BY_SORT_DIRECTION:
    case GET_TASKS_BY_ALL_FIELDS:
      return  {
        ...state,
        error: null,
        loading: true
      };
    case GET_TASKS_BY_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        taskList: action.tasks,
        totalTasks: action.totalTasks,
        page: action.page,
        error: null
      };
      case GET_TASKS_BY_SORT_FIELD_SUCCESS:
      return {
        ...state,
        loading: false,
        taskList: action.tasks,
        totalTasks: action.totalTasks,
        sortField: action.sortField,
        error: null
      };
      case GET_TASKS_BY_SORT_DIRECTION_SUCCESS:
      return {
        ...state,
        loading: false,
        taskList: action.tasks,
        totalTasks: action.totalTasks,
        sortDirection: action.sortDirection,
        error: null
      };
      case GET_TASKS_BY_ALL_FIELDS_SUCCESS:
      return {
        ...state,
        loading: false,
        taskList: action.tasks,
        totalTasks: action.totalTasks,
        page: action.page,
        sortField: action.sortField,
        sortDirection: action.sortDirection,
        error: null
      };
    case TASKS__LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        taskList: null,
        totalTasks: null,
        page: null,
        sortField: "id",
        sortDirection: "asc"
      };
    default:
      return state;
  }
}

export function* fetchTasksByPage(action) {
  const {page} = action;
  let {tasks: {sortField, sortDirection}} = yield select();
  try {
    const result = yield call(getTasks, page, sortField, sortDirection);
    if (result) {
      const {tasks, total_task_count} = result.data.message;
      yield put({type: GET_TASKS_BY_PAGE_SUCCESS, tasks, totalTasks: total_task_count, page});
    }
  } catch (e) {
    yield put({type: TASKS__LOAD_FAILURE, error: "Something went wrong"});
  }
}

export function* fetchTasksBySortField(action) {
  const {sortField} = action;
  let {tasks: {page, sortDirection}} = yield select();
  try {
    const result = yield call(getTasks, page, sortField, sortDirection);
    if (result) {
      const {tasks, total_task_count} = result.data.message;
      yield put({type: GET_TASKS_BY_SORT_FIELD_SUCCESS, tasks, totalTasks: total_task_count, sortField});
    }
  } catch (e) {
    yield put({type: TASKS__LOAD_FAILURE, error: "Something went wrong"});
  }
}

export function* fetchTasksBySortDirection(action) {
  const {sortDirection} = action;
  let {tasks: {page, sortField}} = yield select();
  try {
    const result = yield call(getTasks, page, sortField, sortDirection);
    if (result) {
      const {tasks, total_task_count} = result.data.message;
      yield put({type: GET_TASKS_BY_SORT_DIRECTION_SUCCESS, tasks, totalTasks: total_task_count, sortDirection});
    }
  } catch (e) {
    yield put({type: TASKS__LOAD_FAILURE, error: "Something went wrong"});
  }
}

export function* fetchTasksByAllFields(action) {
  const {page, sortField, sortDirection} = action;
  debugger
  try {
    const result = yield call(getTasks, page, sortField, sortDirection);
    if (result) {
      const {tasks, total_task_count} = result.data.message;
      yield put({type: GET_TASKS_BY_ALL_FIELDS_SUCCESS, tasks, totalTasks: total_task_count, page, sortField, sortDirection});
    }
  } catch (e) {
    yield put({type: TASKS__LOAD_FAILURE, error: "Something went wrong"});
  }
}

export function* watchTasks() {
  yield all([
    yield takeLatest(GET_TASKS_BY_PAGE, fetchTasksByPage),
    yield takeLatest(GET_TASKS_BY_SORT_FIELD, fetchTasksBySortField),
    yield takeLatest(GET_TASKS_BY_SORT_DIRECTION, fetchTasksBySortDirection),
    yield takeLatest(GET_TASKS_BY_ALL_FIELDS, fetchTasksByAllFields),
  ])
}

export function onTasksFetchByPage(page) {
  return {
    type: GET_TASKS_BY_PAGE,
    page
  };
}

export function onTasksFetchBySortField(sortField) {
  return {
    type: GET_TASKS_BY_SORT_FIELD,
    sortField
  };
}

export function onTasksFetchBySortDirection(sortDirection) {
  return {
    type: GET_TASKS_BY_SORT_DIRECTION,
    sortDirection
  };
}

export function onTasksFetchByAllFields(page, sortField, sortDirection) {
  debugger
  return {
    type: GET_TASKS_BY_ALL_FIELDS,
    page,
    sortField,
    sortDirection
  };
}

