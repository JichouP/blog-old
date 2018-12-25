import React, { Component } from 'react';
import styled from 'styled-components';

const LinkBarContainer = styled.div``;
const Hover = styled.button`
  width: 10rem;
  height: 5rem;
  font-size: 3rem;
  background-color: transparent;
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
      </LinkBarContainer>
    );
  }
}
