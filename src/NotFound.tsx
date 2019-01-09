import React, { Component } from 'react';
import styled from 'styled-components';

const NotFoundText = styled.h1`
  text-align: center;
  color: #777;
  font-size: 3rem;
  margin-top: 6rem;
`;

export default class NotFound extends Component {
  render() {
    return <NotFoundText>NotFound</NotFoundText>;
  }
}
