import React from 'react';

import { 
  LandingGuidance,
  Row,
  MakeButton,
  Column
} from 'components/presentational/styled';

const Button = MakeButton('input', 'button');

class AddBook extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button value="Add new book" onClick={this.props.handleToggle}/>
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
        <LandingGuidance>
          Nisi amet qui veniam commodo Lorem aliquip anim. Sit amet culpa ad adipisicing sunt qui est amet sunt proident duis ea aliqua ut. Ut anim aute ex est laborum deserunt eiusmod. Cupidatat et enim et exercitation in dolor voluptate sint enim et ipsum in tempor. 
        </LandingGuidance>
        <AddBook current={addingNewBook} handleToggle={handleToggle} />
      </Column>
    )
  }
}

export default DashboardPres;