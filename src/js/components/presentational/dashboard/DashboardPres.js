import React from 'react';

import AddBook from 'components/presentational/dashboard/AddBook';
import {
  Column,
  Title
} from 'components/presentational/styled';


export class DashboardPres extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addingNewBook: false,
    }
  }

  handleNewBookToggle = (value) => {
    this.setState({
      addingNewBook: value
    })
  }

  render() {
    const { addingNewBook } = this.state;
    return (
      <Column>
        <Title>Library</Title>
        <p>Keep your library up to date to learn new insights about your reading habits.</p>
        <AddBook isOpen={addingNewBook} handleToggle={this.handleNewBookToggle} />
      </Column>
    )
  }
}

export default DashboardPres;