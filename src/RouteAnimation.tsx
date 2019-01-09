import React, { Component } from 'react';
import styled from 'styled-components';

const RouteEnter = styled.div`
  opacity: 0.01;
  transition: all 0.25s ease-out;
`;

export default class RouteAnimation extends Component {
  render() {
    return <RouteEnter>{this.props.children}</RouteEnter>;
  }
}
