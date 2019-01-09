import React, { Component } from 'react';
import styled from 'styled-components';

const LinkBarContainer = styled.div`
  text-align: center;
`;
const Hover = styled.button`
  width: 10rem;
  height: 5rem;
  font-size: 3rem;
  margin: 1rem;
  background-color: transparent;
  border: solid 1px #555;
  border-radius: 3px;
  transform: none;
  transition: 0.3s ease-out;
  :hover {
    background-color: #ecc;
    transition: 0.3s ease-in;
  }
`;

export default class LinkBar extends Component {
  render() {
    return (
      <LinkBarContainer>
        <Hover />
        <Hover />
        <Hover />
        <Hover />
      </LinkBarContainer>
    );
  }
}
