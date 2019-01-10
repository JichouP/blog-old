import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import jsyaml from 'js-yaml';
import contents from './contents/*/*.*';
// import res from './res/*.png';
import Card from './Card';
import media from 'styled-media-query';

const sp = media.lessThan('large');

const CardContainer = styled.div`
  margin: 0rem auto;
  max-width: 60vw;
  ${sp`max-width: 90vw`}
`;

export default class Cards extends Component {
  render = () => {
    const keys = Object.keys(contents).sort();
    return (
      <CardContainer>
        {keys.map(v => {
          const parse = jsyaml.safeLoad(contents[v].content.md.match(/---[\s\S]*---/)[0].replace(/---/g, ''));
          return (
            <Link to={`article/${v}`} key={v}>
              <Card
                title={parse.title}
                date={parse.date}
                imageUrl={contents[v][parse.image] && (Object.values(contents[v][parse.image])[0] as string)}
              />
            </Link>
          );
        })}
      </CardContainer>
    );
  };
}
