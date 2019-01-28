import React from 'react';
import '../styles/feed.scss';

const FeedTest = () => {
  return (
    <div className="Feed" >

      <h2 className="category">Food</h2>
      <li href="http://bundobust.com/manchester" >Bondobust Link</li>
      <h3 className="title">This place is sooooo good!</h3>
      <p>Indian street food, veggie and vegan!!  Check it out</p>
      <p id="info">posted 22nd Jan 2019</p>
      <p id="info">by Terry Testerson</p>

    </div>
  );
};
export default FeedTest;
