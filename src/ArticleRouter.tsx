import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import contents from './contents/*.md';
import res from './res/*.png';
import jsyaml from 'js-yaml';
import styled from 'styled-components';

const ArticleContainer = styled.div`
  margin: 3rem auto;
  max-width: 40rem;
`;

export default class ArticleRouter extends Component {
  render() {
    return Object.keys(contents).map(v => (
      <Route path={`/${v}`} key={v}>
        <ArticleContainer className="article-container">
          <ReactMarkdown
            source={`# ${jsyaml.safeLoad(contents[v].match(/---[\s\S]*---/)[0].replace(/---/g, '')).title}\n${contents[
              v
            ]
              .replace(/---[\s\S]*---\n/, '')
              .replace(/\.\.\/res\/(.+)\.png/g, (_: string, b: string) => `${res[b]}`)}`}
            escapeHtml={false}
          />
        </ArticleContainer>
      </Route>
    ));
  }
}
