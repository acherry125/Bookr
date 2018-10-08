import React from 'react';

import { 
  Row,
  Column,
  PageTitle
} from 'components/presentational/styled';

import Results from './Results';

export default class SearchResultsPres extends React.Component {
  
  render() {
    let { results } = this.props;
    return (
      <Column>
        <PageTitle>Results:</PageTitle>
        <Results results={results} />
      </Column>
    )
  }
}