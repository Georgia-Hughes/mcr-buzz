import React from 'react';
import { Switch, Route, withRouter } from  'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import TopNav from './TopNav';
import TokenManager from '../utils/token-manager';
import BottomNav from '../components/BottomNav';
import AddPost from '../components/AddPost';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: TokenManager.isTokenValid() ? TokenManager.getTokenPayload() : null,
    };
  }

  handleLogin = () => {
    this.setState({ user: TokenManager.getTokenPayload() });
  };

  handleLogout = () => {
    TokenManager.removeToken();
    this.setState({ user: null });
    this.props.history.push('/login');
  };

  isLoggedIn() {
    return Boolean(this.state.user) && TokenManager.isTokenValid();
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
            path="/home"
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
        <Route
          exact
          path="/add-post"
          render={props => (
            <AddPost {...props} isLoggedIn={this.isLoggedIn()} />
          )}
        />
      </Switch>
      <BottomNav
          isLoggedIn={this.isLoggedIn()}
        />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
