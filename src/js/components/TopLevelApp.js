import React from 'react';

import Search from 'components/presentational/SearchPres';
import { Title, Main, Content } from 'components/styled/styles'

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
          <Title>Data Displayed</Title>
          <Router>
            <Switch>
              <Route exact path="/" component={Search}/>
            </Switch>
          </Router>
        </Content>
      </Main>
    )
  }
}