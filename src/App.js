import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

const Layout = lazy(() => import('./containers/Layout'))


function App() {
  return (
    <>
      <Router>
     
        <Switch>
       
          {/* Place new routes over this */}
          <Route path="/app" component={Layout} />
          {/* <Route path="/" component={Dashboard} /> */}
          {/* If you have an index page, you can remothis Redirect */}
          <Redirect exact from="/" to="/app/dashboard" />
        </Switch>
      </Router>
    </>
  )
}

export default App
