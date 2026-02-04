import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import CampaignTypes from './views/campaign-types'
import GoogleAdsFoundations from './views/google-ads-foundations'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={CampaignTypes} exact path="/campaign-types" />
        <Route
          component={GoogleAdsFoundations}
          exact
          path="/google-ads-foundations"
        />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
