import React from 'react';
import '../styles/feed.scss';
import moment from 'moment';

const Feed = (props) => {
  return (
    <div className="Feed" >
      <h2 className="category">{props.category}</h2>
      <h3 className="title">{props.title}</h3>
      <p id="info">posted { moment(props.datePosted).format('MMMM Do YYYY, h:mm a') }</p>
      {
        props.image && (
          <img src={props.image} alt="where's the image" width="100%" />
        )
      }
      {
        !props.image && (
          null
        )
      }
      <p>{props.description}</p>
      <p id="info">by {props.user.firstName} {props.user.lastName}</p>
    </div>
  );
};
export default Feed;
