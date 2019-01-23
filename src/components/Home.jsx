import React from 'react';
import Feed from './Feed';
import FeedTest from './FeedTest';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'event',
      post: 'this is a post',
      title: 'Beer Festival',
      date: '22nd Jan 2019',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      user: 'Terry Testerson',
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    // axios get request to go here
  }

  render() {
    return (
      <React.Fragment>

        <Feed
         category={this.state.category}
         post={this.state.post}
         title={this.state.title}
         date={this.state.date}
         description={this.state.description}
         user={this.state.user}
        />
        <Feed
         category={this.state.category}
         post={this.state.post}
         title={this.state.title}
         date={this.state.date}
         description={this.state.description}
         user={this.state.user}
        />
        <FeedTest />

      </React.Fragment>
    );
  }
}

export default Home;
