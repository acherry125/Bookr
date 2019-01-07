import React from 'react';

import {
  Row,
  MakeButton,
  Column,
  Title
} from 'components/presentational/styled';

import { Link } from 'react-router-dom';

export default class LandingPres extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const InputButton = MakeButton(Link);
    return (
      <Column>
        <Title>Bookr</Title>
        <p>
          Document your library and find unique insights into your readingg habit by signing up below!
        </p>
        <InputButton to="/register">Sign up!</InputButton>
      </Column>
    )
  }

}