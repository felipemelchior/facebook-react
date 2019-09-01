import React, { Component } from 'react';

import { Container, Avatar, Owner, Content, Comment, ContentComment } from './styles';

export default class Post extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  
  render() {
    const { data } = this.props

    return (
      <Container>
        <Owner>
          <Avatar></Avatar>
          <div className="data">
            <p>{data.author.name}</p>
            <span>{data.date}</span>
          </div>
        </Owner>
        <Content>
          {data.content}
        </Content>

        <Comment>
          <p>tete</p>
          {data.comments.map(comment => (
            <ContentComment key={comment}>
              <strong>{comment.author.name}</strong>
            </ContentComment>
          ))}
        </Comment>
      </Container>
    );
  }
}
