/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';

// Components
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';

// Variables
import './App.css';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/register'>
            <Register />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
