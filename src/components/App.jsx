import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(user) {
    this.setState({ user });
  }

  render() {
    return (
      <React.Fragment>
      <Switch>
        <Route
          exact
          path="/"
          render={props => (this.state.user ?
            <Home {...props} user={this.state.user} /> :
            <Redirect to="/login" />
          )}
        />
        <Route
          exact
          path="/login"
          render={props => (
            <Login {...props} onLogin={this.handleLogin} />
          )}
        />
        <Route exact path="/sign-up" component={SignUp} />
      </Switch>
      </React.Fragment>
    );
  }
}

export default App;
