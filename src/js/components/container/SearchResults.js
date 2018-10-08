import React from 'react';
import SearchResultsPres from 'components/presentational/results/SearchResultsPres';

const fakeResults = {
  items: [
    {
      title: 'School Systems in D.C.',
      author: "D.C. Metropolitan Education Board",
      lastUpdated: '1996-03-23',
      numRecords: 434
    },
    {
      title: 'Higher Education Finances',
      author: "NHES Council",
      lastUpdated: '2018-12-02',
      numRecords: 7000
    }
  ]
};

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {}
    };
  }

  componentDidMount() {
    this.setState({
      results: fakeResults
    })
  }

  render() {

    let { results } = this.state;

    return <SearchResultsPres results={results} />
  }
}