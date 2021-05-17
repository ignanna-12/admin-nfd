import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import AdminPanel from './components/adminPanel/AdminPanel';
import EnterToAdminPanel from './components/login/enterToAdminPanel/EnterToAdminPanel';
import { useSelector } from 'react-redux';
import { userIdLoginSel } from './redux/selectors/authSelectors';

function App() {
  const userIdLogin = useSelector(userIdLoginSel);
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
