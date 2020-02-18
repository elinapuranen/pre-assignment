import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import FrontPage from './FrontPage';
import Package from './Package'
import './index.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <FrontPage/>}></Route>
        <Route exact path="/packages/:name" render={({ match }) =><Package/>}/>
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
