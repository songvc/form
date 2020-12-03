import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './container/Main'

class App extends Component {
  render () {
    return <Router>
      <Switch>
        <Route path='/' exact component={Main} />
        {/* <Route path='/map' exact component={Map} /> */}
      </Switch>
    </Router>
  }
}

export default App
