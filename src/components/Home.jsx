import React from 'react';
import Feed from './Feed';
import axios from 'axios';
import TokenManager from '../utils/token-manager';
import '../styles/home.scss';
import moment from 'moment';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      user: TokenManager.isTokenValid() ? TokenManager.getTokenPayload() : null,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/posts')
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.posts.map((post) => {
          return (
            <Feed
            category={post.category}
            datePosted={post.datePosted}
            description={post.description}
            image={post.image}
            title={post.title}
            user={this.state.user}
            key={post._id}
           />
          );
        })}

      </React.Fragment>
    );
  }
}

export default Home;
