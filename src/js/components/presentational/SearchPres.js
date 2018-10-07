import React from 'react';

import { 
  SearchWrapper, 
  SearchTitle, 
  SearchForm, 
  SearchLabel, 
  SearchInput,
  SearchSubmit
} from 'components/presentational/styled';

export default class SearchPres extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
  }
 
  render() {
    const searchPlaceholder = 'Search here';
    return (
      <SearchWrapper>
        <SearchTitle>Search the world's Data</SearchTitle>
        <SearchForm onSubmit={this.handleSubmit}>
            <SearchLabel htmlFor="search-bar">Search:</SearchLabel>
            <SearchInput id="search-bar" placeholder={searchPlaceholder} />
            <SearchSubmit />
        </SearchForm>
      </SearchWrapper>
    )
  }
}