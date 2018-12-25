import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import Cards from './Cards';
import ArticleRouter from './ArticleRouter';
import Linkbar from './LinkBar';

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
`;
const CardContainer = styled.div`
  margin: 0rem auto;
  max-width: 65rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
`;

class App extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <RootContainer>
          <Logo />
          <Linkbar />
          <TitleText>マウスしたりWebしたり</TitleText>
          <MainContainer>
            <Switch>
              <Route exact path="/">
                <CardContainer>
                  <Cards />
                </CardContainer>
              </Route>
              <ArticleRouter />
            </Switch>
          </MainContainer>
        </RootContainer>
      </BrowserRouter>
    );
  }
}

export default App;
