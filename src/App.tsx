import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import media from 'styled-media-query';
import Logo from './Logo';
import Cards from './Cards';
import ScrollToTop from './ScrollToTop';
import NotFound from './NotFound';
// import Linkbar from './LinkBar';

import contents from './contents/*/*.*';
import MarkdownParse from './MarkdownParse';

const BASE_URL = '/blog';

const sp = media.lessThan('small');

const RootContainer = styled.div`
  padding: 4rem 0rem;
`;
const TitleText = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #555;
`;
const MainContainer = styled.div`
  margin: 3rem;
  ${sp`margin: 0rem;`}
`;

class App extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter basename={BASE_URL}>
        <TransitionGroup>
          <CSSTransition classNames="fade" timeout={500}>
            <ScrollToTop>
              <RootContainer>
                <Logo />
                {/* <Linkbar /> */}
                <TitleText>マウスしたりWebしたり</TitleText>
                <MainContainer>
                  <Switch>
                    <Route exact path="/" component={Cards} />
                    {/* <ArticleRouter /> */}
                    <Route
                      exact
                      path="/article/:id"
                      render={({ match }) => {
                        if (typeof contents[match.params.id] === 'undefined') {
                          return <NotFound />;
                        }
                        return <MarkdownParse match={match} />;
                      }}
                    />
                    <Route exact component={NotFound} />
                  </Switch>
                </MainContainer>
              </RootContainer>
            </ScrollToTop>
          </CSSTransition>
        </TransitionGroup>
      </BrowserRouter>
    );
  }
}

export default App;
