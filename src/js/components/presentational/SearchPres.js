import React from 'react';
import styled from 'styled-components';

import { SearchWrapper, SearchTitle, SearchInnerWrapper, SearchLabel, SearchInput } from 'components/styled/styles';

export default class SearchPres extends React.Component {
  render() {
    const searchPlaceholder = 'Search here';
    return (
      <SearchWrapper>
        <SearchTitle>Search the world's Data</SearchTitle>
        <SearchInnerWrapper>
          <SearchLabel htmlFor="search-bar">Search:</SearchLabel>
          <SearchInput id="search-bar" placeholder={searchPlaceholder} />
        </SearchInnerWrapper>
      </SearchWrapper>
    )
  }
}