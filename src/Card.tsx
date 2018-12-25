import React, { Component } from 'react';
import noimage from './res/noimage.png';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
`;
const CardImg = styled.img`
  border-radius: 5px 5px 0 0;
  width: 100%;
`;
const CardContent = styled.div`
  padding: 20px;
`;
const CardTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
  overflow: hidden;
`;
const CardDate = styled.p`
  color: #777;
  font-size: 0.9rem;
  text-align: right;
`;

interface Props {
  title: string;
  date: string;
  imageUrl: string;
}

export default class Card extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <CardContainer className="card">
        <CardImg className="card-img" src={this.props.imageUrl || noimage} alt="" />
        <CardContent className="card-content">
          <CardTitle className="card-title">{this.props.title}</CardTitle>
          <CardDate className="card-date">Posted at {this.props.date}</CardDate>
        </CardContent>
      </CardContainer>
    );
  }
}
