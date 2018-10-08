import React from 'react';

import { 
  SearchForm, 
  SearchLabel, 
  SearchInput,
  SubmitButton,
  PageTitle, 
  Row,
  Column
} from 'components/presentational/styled';

export default class SearchPres extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    const searchPlaceholder = 'Search here';

    return (
      <Column centered>
        <PageTitle>Search the world's Data</PageTitle>
        <SearchForm onSubmit={this.props.handleSubmit}>
            <SearchLabel htmlFor="search-bar">Search:</SearchLabel>
            <Row>
              <SearchInput id="search-bar" placeholder={searchPlaceholder} />
              <SubmitButton round />
            </Row>
        </SearchForm>
      </Column>
    )
  }
}