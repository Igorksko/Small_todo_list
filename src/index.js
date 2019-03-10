import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {Provider} from "react-redux";
import ReduxToastr from "react-redux-toastr";
import store, {history} from "./Redux/store";

import Main from "./Pages/Main";
import PageNotFound from "./Pages/NotFound";
import Login from "./Pages/Login";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={props => <Main {...props}/>}/>
        <Route path="/login" render={props => <Login {...props}/>}/>
        <Route path="/404" render={props => <PageNotFound {...props}/>}/>
        {/*<Redirect from='*' to='/404' />*/}
      </Switch>
    </Router>
    <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      closeButton
      closeOnToastrClick
    />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
