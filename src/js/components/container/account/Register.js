import React from 'react';

import { RegisterPres } from 'components/presentational/account/';

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <RegisterPres handleLogin={this.props.handleLogin}/>
  }

}

export default Register;