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
      category: '',
    };
    this.handleOnSelect = this.handleOnSelect.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/posts')
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      });
  }

  handleOnSelect(event) {
    this.setState({ category: event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <label htmlFor="filter">Filter by Category: </label>
          <select onChange={this.handleOnSelect} name="categories" >
                        <option>Select a Category</option>
                        <option value="food">Food</option>
                        <option value="design">Design</option>
                        <option value="photography">Photography</option>
                        <option value="tech">Tech.</option>
                        <option value="Events/Entertainment">Events/Entertainment</option>
                        <option value="family">Family</option>
                        <option value="shopping">Shopping</option>
                        <option value="history">History</option>
                        <option value="manchester">Manchester</option>
                    </select>
        {this.state.posts.filter((post) => {
          return post.category === this.state.category;
        }).map((post) => {
          return (
            <Feed
            category={post.category}
            date={post.date}
            description={post.description}
            image={post.image}
            title={post.title}
            user={this.state.user}
            key={post._id}
            liked={this.state.likes}
            count={this.handleLikeClicks}
            />
          );
        })}

      </React.Fragment>
    );
  }
}

export default Home;
