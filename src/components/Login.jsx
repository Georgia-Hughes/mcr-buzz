import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TokenManager from '../utils/token-manager';
import '../styles/sign-up.scss';
import '../styles/app.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleLogin() {
    axios.post('http://127.0.0.1:3000/auth/login', {
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) => {
        TokenManager.setToken(response.data.token);
        this.props.onLogin(response.data);
        this.props.history.push('/home');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="signup-container">
        <h1>Login</h1>
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <button onClick={this.handleLogin}>Login</button> or <Link to="/sign-up">Sign Up</Link>
        </div>
        {
          this.state.errorMessage &&
          <div><span>{this.state.errorMessage}</span></div>
        }
      </div>
    );
  }
}

export default Login;
