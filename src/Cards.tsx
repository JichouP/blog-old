import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import jsyaml from 'js-yaml';
import contents from './contents/*.md';
import res from './res/*.png';
import Card from './Card';

const CardWrapper = styled.div`
  min-width: 15rem;
  max-width: 30rem;
  margin: 2rem 0rem;
`;

export default class Cards extends Component {
  render = () => {
    const keys = Object.keys(contents).sort();
    return keys.map(v => {
      const parse = jsyaml.safeLoad(contents[v].match(/---[\s\S]*---/)[0].replace(/---/g, ''));
      return (
        <CardWrapper key={v}>
          <Link to={v}>
            <Card title={parse.title} date={parse.date} imageUrl={res[parse.image]} />
          </Link>
        </CardWrapper>
      );
    });
  };
}
