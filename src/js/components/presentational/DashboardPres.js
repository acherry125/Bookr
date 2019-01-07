import React from 'react';

import {
  Row,
  MakeButton,
  Column,
  Title
} from 'components/presentational/styled';

const Button = MakeButton('input', 'button');

class AddBook extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button value="Add new book" onClick={this.props.handleToggle} />
    )
  }
}

export class DashboardPres extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addingNewBook: false,
      books: []
    }
  }

  handleNewBookToggle() {
    this.setState({
      addingNewBook: this.state.addingNewBook
    })
  }

  render() {
    const { handleToggle, addingNewBook } = this.props;
    return (
      <Column>
        <Title>Library</Title>
        <p>Keep your library up to date to learn new insights about your reading habits.</p>
        <AddBook current={addingNewBook} handleToggle={handleToggle} />
      </Column>
    )
  }
}

export default DashboardPres;