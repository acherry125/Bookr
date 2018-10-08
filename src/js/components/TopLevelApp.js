import React from 'react';

import Search from 'components/container/Search';
import SearchResults from 'components/container/SearchResults';
import { Title, Main, Content } from 'components/presentational/styled'

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
              <Route exact path="/results" component={SearchResults}/>
            </Switch>
          </Router>
        </Content>
      </Main>
    )
  }
}