import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import AdminPanel from './components/adminPanel/AdminPanel';
import EnterToAdminPanel from './components/login/enterToAdminPanel/EnterToAdminPanel';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/admin" component={AdminPanel} />
        <Route exact path="/" component={EnterToAdminPanel} />
      </Switch>
    </div>
  );
}

export default App;
