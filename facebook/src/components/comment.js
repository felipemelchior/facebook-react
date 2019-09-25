import React from 'react';

import './comment.css';

export default function Comment({data}) {
  return (
    <div className="comment-container">
      <img src={data.author.avatar} alt={data.author.name} />
      
      <div className="comment">
        <small>{data.author.name}</small>
        <p>{data.content}</p>
      </div>
    </div>
  );
}
