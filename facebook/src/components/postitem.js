import React from 'react';

import Comment from './comment';

import './postitem.css';

export default function PostItem({ data }) {
  return (
    <div className="item-container">
      <div className="author">
        <img src={data.author.avatar} alt={data.author.name} />
        <div>
          <p>{data.author.name}</p>
          <small>{data.date}</small>
        </div>
      </div>

      <div className="content">
        <p>{data.content}</p>
        <div className="break"></div>

        {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
      </div>
    </div>
  );
}
