import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import FrontPage from './FrontPage'
import Package from './Package'
import './index.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FrontPage}></Route>
        <Route path="/packages/:name" exact component={Package}/>
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
