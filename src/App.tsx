import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import contents from './contents/*.md';
import jsyaml from 'js-yaml';
import Logo from './Logo';
import Card from './Card';
import res from './res/*.png';

class App extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  renderCard = () => {
    const keys = Object.keys(contents).sort();
    return keys.map(v => {
      const parse = jsyaml.safeLoad(contents[v].match(/---[\s\S]*---/)[0].replace(/---/g, ''));
      return (
        <div className="card-wrapper" key={v}>
          <Link to={v}>
            <Card title={parse.title} date={parse.date} imageUrl={res[parse.image]} />
          </Link>
        </div>
      );
    });
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Logo />
          <div>
            <Switch>
              <Route exact path="/">
                <div className="card-container">{this.renderCard()}</div>
              </Route>
              {Object.keys(contents).map(v => (
                <Route path={`/${v}`} key={v}>
                  <div className="article-container">
                    <ReactMarkdown
                      source={`# ${
                        jsyaml.safeLoad(contents[v].match(/---[\s\S]*---/)[0].replace(/---/g, '')).title
                      }\n${contents[v]
                        .replace(/---[\s\S]*---\n/, '')
                        .replace(/\.\.\/res\/(.+)\.png/g, (_: string, b: string) => `${res[b]}`)}`}
                      escapeHtml={false}
                    />
                  </div>
                </Route>
              ))}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
