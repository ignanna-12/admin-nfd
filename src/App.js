import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import PrivateRoute from './components/adminPanel/PrivateRoute';
import EnterToAdminPanel from './components/login/enterToAdminPanel/EnterToAdminPanel';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/admin" component={PrivateRoute} />
        <Route exact path="/" component={EnterToAdminPanel} />
      </Switch>
    </div>
  );
}

export default App;
