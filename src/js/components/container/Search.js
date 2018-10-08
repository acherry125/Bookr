import React from 'react';

import SearchPres from 'components/presentational/SearchPres';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      searched: true
    })
  }

  render() {
    if (this.state.searched) {
      this.props.history.push('/results');
    }

    return <SearchPres handleSubmit={this.handleSubmit}/>
  }

}