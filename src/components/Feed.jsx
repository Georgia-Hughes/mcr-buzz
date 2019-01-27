import React from 'react';
import '../styles/feed.css';

const Feed = (props) => {
  return (
    <div className="Feed" >

      <h2 className="category">{props.category}</h2>
      <h3 className="title">{props.title}</h3>
      <p id="info">posted {props.date}</p>
      <img src="https://www.fillmurray.com/640/360" alt="where's the image" width="100%" />
      <p>{props.description}</p>
      <p id="info">by {props.user}</p>

    </div>
  );
};
export default Feed;
