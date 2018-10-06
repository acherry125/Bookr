import React from 'react';

import Search from 'components/presentational/SearchPres';
import { Title, Main, Content } from 'components/styled/styles'

export default class TopLevelApp extends React.Component {
  render() {
    return (
      <Main>
        <Content>
           <Title>Data Displayed</Title>
          <Search />
        </Content>
      </Main>
    )
  }
}