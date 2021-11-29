import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import Login from './Pages/Login';
import GameScreen from './Pages/GameScreen';
import Settings from './Pages/Settings';
import Feedback from './Pages/Feedback';
import Ranking from './Pages/Ranking';

export default function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={ Login }
      />
      <Route
        path="/game"
        component={ GameScreen }
      />
      <Route
        path="/settings"
        component={ Settings }
      />
      <Route
        path="/feedback"
        component={ Feedback }
      />
      <Route
        path="/ranking"
        component={ Ranking }
      />
    </Switch>
  );
}
