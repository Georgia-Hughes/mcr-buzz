import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import TopNav from './TopNav';

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

  handleLogout = () => {
    this.setState({ user: null });
  };

  isLoggedIn() {
    return Boolean(this.state.user);
  }

  render() {
    return (
      <React.Fragment>
        <TopNav
          isLoggedIn={this.isLoggedIn()}
          user={this.state.user}
          onLogout={this.handleLogout}
        />
      <Switch>
      <Route
            exact
            path="/"
            component={Home}
            user={this.state.user}
        />
        <Route
          exact
          path="/login"
          render={props => (
            <Login {...props} onLogin={this.handleLogin} />
          )}
        />
        <Route
          exact
          path="/sign-up"
          component={SignUp}
        />
      </Switch>
      </React.Fragment>
    );
  }
}

export default App;
