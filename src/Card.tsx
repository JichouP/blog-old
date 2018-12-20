import React, { Component } from 'react';
import noimage from './res/noimage.png';

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
      <div className="card">
        <img className="card-img" src={this.props.imageUrl || noimage} alt="" />
        <div className="card-content">
          <h1 className="card-title">
            <div>{this.props.title}</div>
          </h1>
          <p className="card-date">Posted at {this.props.date}</p>
        </div>
      </div>
    );
  }
}
