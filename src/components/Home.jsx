import React from 'react';

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome {props.user.firstName} {props.user.lastName}</p>
  </div>
);

export default Home;
