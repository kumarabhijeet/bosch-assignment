import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './containers/App';
import Login from './containers/Login';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path={'/login'} component={Login} />
        <Route path={'/'} component={Home} />
      </Switch>
    </BrowserRouter>

  </React.StrictMode>
  ,
  document.getElementById('root')
);

