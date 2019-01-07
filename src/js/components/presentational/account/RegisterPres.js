import React from 'react';

import { 
  Row,
  MakeButton,
  Column,
  Title
} from 'components/presentational/styled';

import { Link } from 'react-router-dom';

export class RegisterPres extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const InputButton = MakeButton(Link);
    return (
      <Column>
        <Title>Register your Account</Title>
        <p>Please input your information below to register for Bookr.</p>
        <InputButton to="/" onClick={this.props.handleLogin}>Get Started</InputButton>
      </Column>
    )
  }
}

export default RegisterPres;