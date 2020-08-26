import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {

    return (
      <Router>
        <div>
          <nav className="navbar navbar-dark bg-dark">
            <h2 className="navbar-brand">David Diep</h2>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/about">About Me</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/apps">Applications</Link>
                <Link to="/contact">Contact Me</Link>
              </div>
            </div>
          </nav>
          <Switch>
            <Redirect from='/' to='/about' />
            <Route path='/about' >
              <h1>Route About</h1>
            </Route>
            <Route path='/skills'>
              <h1>Skills About</h1>
            </Route>
            <Route path='/apps'>
              <h1>App About</h1>
            </Route>
            <Route path='/contact'>
              <h1>Contact About</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
