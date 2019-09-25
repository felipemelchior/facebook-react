import React, { Component } from 'react';

import PostItem from './postitem';

import './posts.css';

class Posts extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Felipe Homrich Melchior',
          avatar: 'https://avatars3.githubusercontent.com/u/26800259?v=4'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            content: "Conteúdo do comentário"
          }
        ],
      },
      {
        id: 2,
        author: {
          name: 'Felipe Homrich Melchior',
          avatar: 'https://avatars3.githubusercontent.com/u/26800259?v=4'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            content: "Conteúdo do comentário muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito  grande"
          },
          {
            id: 3,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            content: "Conteúdo do comentário"
          }
        ],
      },
    ]
  };

  render() {
    return (
      <div className="post-container">
        {this.state.posts.map(post => <PostItem key={post.id} data={post} />)}
      </div>
    );
  }
}

export default Posts;
