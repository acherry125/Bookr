import React from 'react';

import LandingPage from 'components/container/Landing';
import Dashboard from 'components/container/Dashboard';
import { Register } from 'components/container/account/';
import { Main, Content } from 'components/presentational/styled';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

export default class TopLevelApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorized: false,
      user: {}
    }
  }

  handleLogin = () => {
    this.setState({
      authorized: true
    })
  }

  render() {
    const { authorized } = this.state;
    return (
      <Main>
        <Content>
          {authorized && (
            <Router>
              <Switch>
                <Route exact path="/" component={Dashboard} />
              </Switch>
            </Router>
          )}
          {!authorized && (
            <Router>
              <Switch>
                <Route path="/register" render={props => <Register {...props} handleLogin={this.handleLogin} />} />
                <Route path="/" component={LandingPage} />
              </Switch>
            </Router>
          )}
        </Content>
      </Main>
    )
  }
}