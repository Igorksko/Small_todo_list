import { createStore, applyMiddleware, } from "redux";
import { routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleWare from "redux-saga";
import createHistory from "history/createBrowserHistory";
import rootReducer from "./reducer";
import sagas from "./saga";

export const history = createHistory({
  basename: "/"
});

const initialState = {};
const enhancers = [];
const sagaMiddleware = createSagaMiddleWare({
  onError: (err) => console.log("Unhandled saga error", err)
});
const middleware = [sagaMiddleware, routerMiddleware(history)];

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(rootReducer, initialState, composedEnhancers);

sagaMiddleware.run(sagas);

export default store
