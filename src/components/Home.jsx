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
    console.log(event.target.value);
    
    this.setState({ category: event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <div class="center-element">
        <label className="filter" htmlFor="filter">Filter by Category: </label>
          <select className="dropdown" onChange={this.handleOnSelect} name="categories" >
                        <option value="">Select a Category</option>
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
        </div>
        {this.state.posts.filter((post) => {
          if (this.state.category === '') {
            return true;
          }
          return post.category === this.state.category;
        }).map((post) => {
          return (
            <Feed
            category={post.category}
            datePosted={post.datePosted}
            description={post.description}
            image={post.image}
            title={post.title}
            user={post.user}
            key={post._id}
            liked={this.state.likes}
            count={this.handleLikeClicks}
            id={post._id}
            likes={post.likes}
           />
          );
        })}
      </React.Fragment>
    );
  }
}

export default Home;
