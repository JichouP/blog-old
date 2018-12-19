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
    const keys = Object.keys(contents);
    return keys.map(v => {
      const parse = jsyaml.safeLoad(contents[v].match(/---[\s\S]*---/)[0].replace(/---/g, ''));
      return (
        <div className="card-container" key={v}>
          <Link to={v}>
            <Card title={parse.title} text={parse.subtitle} imageUrl={res[parse.image]} />
          </Link>
        </div>
      );
    });
  };
  render() {
    prettyPrint();
    return (
      <BrowserRouter>
        <div>
          <Logo />
          <div>
            <Switch>
              <Route exact path="/">
                <div id="article-container">{this.renderCard()}</div>
              </Route>
              {Object.keys(contents).map(v => (
                <Route path={`/${v}`} key={v}>
                  <ReactMarkdown
                    source={contents[v]
                      .replace(/---[\s\S]*---\n/, '')
                      .replace(/\.\.\/res\/(.+)\.png/g, (_: string, b: string) => `${res[b]}`)}
                    escapeHtml={false}
                  />
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
