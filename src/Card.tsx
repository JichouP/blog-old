import React, { Component } from 'react';
import noimage from './res/noimage.png';
import styled from 'styled-components';
import media from 'styled-media-query';
const sp = media.lessThan('small');
const mid = media.lessThan('medium');

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4vw 0rem;
  max-width: 100%;
  height: 15vw;
  min-height: 4rem;
  max-height: 10rem;
  overflow: hidden;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
  transition: 0.3s;
  transform: scale(1);
  :hover {
    transition: 0.3s;
    transform: scale(1.1);
  }
`;
const CardImg = styled.img`
  border-radius: 5px;
  max-width: 25%;
  object-fit: cover;
`;
const CardContent = styled.div`
  width: 100%;
  padding: 1rem;
  ${mid`padding: 0.5rem;`}
  ${sp`padding: 0rem;`}
`;
const CardTitle = styled.h1`
  font-size: 1.5rem;
  ${mid`font-size: 1rem`};
  margin-left: 1rem;
  ${sp`margin-top: 0.2rem;`}
  white-space: nowrap;
  text-align: left;
  color: #333;
`;
const CardDate = styled.p`
  position: absolute;
  right: 1rem;
  bottom: 0rem;
  margin-bottom: 0.2rem;
  color: #777;
  font-size: 0.9rem;
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
      <CardContainer>
        <CardImg src={this.props.imageUrl || noimage} alt="" />
        <CardContent>
          <CardTitle>{this.props.title}</CardTitle>
          <CardDate>Posted at {this.props.date}</CardDate>
        </CardContent>
      </CardContainer>
    );
  }
}
