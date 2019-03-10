import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { reducer as toastrReducer } from "react-redux-toastr"

import * as tasksReducer from "./../ducks/tasks";
import * as userReducer from "../ducks/user";


export default combineReducers({
  toastr: toastrReducer,
  routing: routerReducer,
  tasks: tasksReducer.default,
  user: userReducer.default,
})
