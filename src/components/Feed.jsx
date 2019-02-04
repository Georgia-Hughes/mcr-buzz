import React from 'react';
import LikeButton from './LikeButton';
import '../styles/feed.scss';

const Feed = (props) => {
  return (
    <div className="Feed" >
      <h2 className="category">{props.category}</h2>
      <h3 className="title">{props.title}</h3>
      <p id="info">posted {props.date}</p>
      <img src={props.image} alt="where's the image" width="100%" />
      <p>{props.description}</p>
      <p id="info">by {props.user.firstName} {props.user.lastName}</p>
      <LikeButton />
    </div>
  );
};
export default Feed;
