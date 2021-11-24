import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import Login from './Pages/Login';

export default function App() {
  return (
    <Switch>
      <Route path="/" render={ (props) => <Login { ...props } /> } />
    </Switch>
  );
}
