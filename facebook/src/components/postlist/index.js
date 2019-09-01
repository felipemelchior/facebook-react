import React, { Component } from 'react';

import { Container } from './styles';
import Post from '../post';

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',       
        },
        date: '04 jun 2019',
        content: 'Pessoal, alguem sabe se a empresa X está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
            },
            content: 'Conteúdo do comentário'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Marcos Vinícius',       
        },
        date: '03 jun 2019',
        content: 'Pessoal, alguem sabe se a empresa X está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Bot Facebook',
            },
            content: 'Não'
          }
        ]
      },

    ]
  }

  render() {
    const { posts } = this.state;

    return (
      <Container>
        {posts.map(post => <Post key={post.id} data={post} /> )}
      </Container>
    );
  }
}
