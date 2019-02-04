/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';

import '../styles/likebutton.scss';


class Like extends React.Component {
  state = {
    count: 0,
    isSuccess: false,
    isError: false,
  };

  handleClick = () => {
    axios.post('http://localhost:3000/posts/:id/likes')
      .then(() => {
        this.setState(({ count }) => ({
          isSuccess: true,
          count: count + 1,
        }));
        console.log(this.state);
      })
      .catch((err) => {
        this.setState({
          isError: true,
        });
        console.log(err);
      });
  };

  render() {
    return (
      <div className="fas fa-heart" id="heart" onClick={this.handleClick}>
        <button
          className="button"
          onClick={this.handleClick}>
          {this.state.count}
          </button>
      </div>

    );
  }
}

export default Like;
