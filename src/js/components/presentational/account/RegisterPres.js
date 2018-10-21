import React from 'react';

import { 
  LandingGuidance,
  Row,
  MakeButton,
  Column
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
        <LandingGuidance>
          Incididunt qui magna velit sit eu exercitation proident ea dolor. Fugiat ut velit proident excepteur voluptate adipisicing incididunt minim laboris tempor. 
          Laboris pariatur eu proident cillum esse. Dolor ea deserunt velit aliqua ad excepteur nulla exercitation dolore id. Qui aute id laboris culpa sunt aliquip enim magna est nulla incididunt sit qui. Eu anim sit labore adipisicing fugiat dolor aliqua tempor mollit eu occaecat.
        </LandingGuidance>
        <InputButton to="/user/test-user/">Get Started</InputButton>
      </Column>
    )
  }
}

export default RegisterPres;