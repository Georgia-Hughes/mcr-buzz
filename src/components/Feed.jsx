import React from 'react';
import LikeButton from './LikeButton';
import '../styles/feed.scss';
import moment from 'moment';
import {
 FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon 
} from 'react-share';
import Linkify from 'react-linkify';

const shareUrl = 'https://trello.com/b/jSqMO2qF/mcr-blog';
const title = 'MCR Buzz';

const Feed = (props) => {
  return (
    <div className="Feed" >
      <h2 className="category">{props.category}</h2>
      <h3 className="title">{props.title}</h3>
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
        <p id="info">posted { moment(props.datePosted).format('MMMM Do YYYY, h:mm a') }</p>
      <p><Linkify>{props.description}</Linkify></p>
      <p id="info">by {props.user}</p>
      <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__facebook__share-button">
            <FacebookIcon
              size={32}
              round />
        </FacebookShareButton>
        <WhatsappShareButton
            url={shareUrl}
            quote={title}
            className="Demo__whatsapp__share-button">
            <WhatsappIcon
              size={32}
              round />
        </WhatsappShareButton>
        <LikeButton id={props.id} liked={props.likes}/>
    </div>
  );
};
export default Feed;
