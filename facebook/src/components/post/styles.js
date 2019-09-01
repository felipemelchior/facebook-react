import styled from 'styled-components';

export const Container = styled.div`
  width: 700px;
  background: #fff;
  margin-top: 10px;
  border: 1px solid #ccc;
  box-shadow: 5px 5px 5px #ccc;
  border-radius: 5px;
  padding: 20px 20px;
`;

export const Avatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #bbb;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  div.data {
    margin-left: 10px;

    p {
      font-size: 16px;
      margin-bottom: 0;
    }

    span{
      font-size: 12px;  
    }
  }
`;

export const Content = styled.div`
  border-bottom: 1px solid #ccc;
  margin: 20px 0 20px 0;  
  padding-bottom: 20px;

  p {
    color: #3e3e3e;
    font-size: 14px;
    line-height: 1.4;
  }
`;

export const Comment = styled.div`
  margin: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContentComment = styled.div`
  width: 600px;
  background: #eee;
  border-radius: 20px;
  display: flex;
  flex: 1;
  align-items: center;

`;
