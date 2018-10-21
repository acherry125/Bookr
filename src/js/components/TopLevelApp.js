import React from 'react';

import LandingPage from 'components/container/Landing';
import Dashboard from 'components/container/Dashboard';
import { Register } from 'components/container/account/';
import { Title, Main, Content } from 'components/presentational/styled';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

export default class TopLevelApp extends React.Component {
  render() {
    return (  
      <Main>
        <Content>
          <Title>Bookr</Title>
          <Router>
            <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route path="/register" component={Register} />
              <Route path="/user/:userId/" component={Dashboard} />
            </Switch>
          </Router>
        </Content>
      </Main>
    )
  }
}