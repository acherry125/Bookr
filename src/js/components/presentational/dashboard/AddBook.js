import React from 'react';

import {
  MakeButton,
  InputGroup,
  Form,
  Divider,
  BookOutline,
  BookTitle,
  Input
} from 'components/presentational/styled';

const Button = MakeButton('input', 'button');

export class AddBook extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isOpen } = this.props;
    if (!isOpen) {
      return (
        <Button value="Add new book" onClick={() => this.props.handleToggle(true)} />
      )
    } else {
      return (
        <BookOutline>
          <Form>
            <InputGroup>
              <label htmlFor="book-title">Title</label>
              <BookTitle id="book-title" id="book-title" name="book-title" placeholder="The World Eater"/>
            </InputGroup>
            <InputGroup>
              <label htmlFor="book-author">Author</label>
              <Input type="text" id="book-author" name="book-author" placeholder="Arthur Durden" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="book-author">Genre</label>
              <Input type="text" id="book-genre" name="book-genre" placeholder="Fantasy Space Drama" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="book-author">Pages</label>
              <Input type="number" id="book-pages" name="book-pages" placeholder="523"/>
            </InputGroup>
            <InputGroup>
              <label htmlFor="book-author">Format</label>
              <Input type="text" id="book-format" name="book-format" placeholder="Kindle E-Book" />
            </InputGroup>
            <Divider visible={false} />
            <InputGroup>
              <label htmlFor="book-date-started">Date Started</label>
              <Input type="date" id="book-date-started" name="book-date-started"/>
            </InputGroup>
            <InputGroup>
              <label htmlFor="book-author">Date Finished</label>
              <Input type="date" id="book-date-finished" name="book-date-finished"/>
            </InputGroup>
            <Divider visible={false} />
            <InputGroup>
              <label htmlFor="book-date-started">Country</label>
              <Input type="text" id="book-date-country" name="book-date-country" placeholder="Canada"/>
            </InputGroup>
            <InputGroup>
              <label htmlFor="book-author">Language</label>
              <Input type="text" id="book-date-language" name="book-date-language" placeholder="French" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="book-reread">Reread Worthy?</label>
              <Input type="checkbox" id="book-reread-true" name="book-reread" value="reread" />
            </InputGroup>
          </Form>
          <Button value="Cancel adding book" onClick={() => this.props.handleToggle(false)} />
        </BookOutline>
      )
    }
  }
}

export default AddBook;