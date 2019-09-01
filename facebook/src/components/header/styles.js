import styled from 'styled-components';

export const Container = styled.div`
  background: #4A90E2;
  height: 64px;
  width: 100%;
  display: flex;
  align-content: center;
`;

export const Nav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  a {
    font-size: 15px;
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #ddd;
    }
  }
`;