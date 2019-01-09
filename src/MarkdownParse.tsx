import React, { Component } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import jsyaml from 'js-yaml';
import contents from './contents/*/*.*';
import { match } from 'react-router';
import runPrettify from './runPrettify';

const ArticleContainer = styled.div`
  margin: 3rem auto;
  max-width: 40rem;
`;

export default class MarkdownParse extends Component<{ match: match<{ id: string }> }, {}> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    runPrettify();
  }
  render() {
    return (
      <ArticleContainer>
        <ReactMarkdown
          source={`# ${
            jsyaml.safeLoad(
              contents[this.props.match.params.id].content.md.match(/---[\s\S]*---/)[0].replace(/---/g, '')
            ).title
          }\n${contents[this.props.match.params.id].content.md
            .replace(/---[\s\S]*---\n/, '')
            .replace(
              /\.\/(.+)\.png/g,
              (_: string, b: string) => `${Object.values(contents[this.props.match.params.id][b])[0]}`
            )
            .replace(/\`\`\`.+/g, '<pre class="prettyprint">')
            .replace(/\`\`\`/g, '</pre>')}`}
          escapeHtml={false}
        />
      </ArticleContainer>
    );
  }
}
