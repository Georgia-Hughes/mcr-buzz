import React from 'react';
import Feed from './Feed';
import axios from 'axios';
import TokenManager from '../utils/token-manager';
import '../styles/home.scss';

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
            key={post._id}
            category={post.category}
            title={post.title}
            date={post.date}
            description={post.description}
            user={this.state.user}
            image={post.image}
           />
          );
        })}

      </React.Fragment>
    );
  }
}

export default Home;
