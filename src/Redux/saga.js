import {all} from "redux-saga/effects";
import {watchTasks} from "../ducks/";

// all sagas connector
export default function* sagas() {
  yield all([watchTasks()])
}
