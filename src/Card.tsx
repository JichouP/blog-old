import React, { Component } from 'react';
import noimage from './res/noimage.png';

interface Props {
  title: string;
  text: string;
  imageUrl: string;
}

export default class Card extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <img className="card-img" src={this.props.imageUrl || noimage} alt="" />
        <div className="card-content">
          <h1 className="card-title">{this.props.title}</h1>
          <p className="card-text">{this.props.text}</p>
        </div>
      </div>
    );
  }
}
