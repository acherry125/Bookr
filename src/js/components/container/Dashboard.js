import React from 'react';

import { DashboardPres } from 'components/presentational/DashboardPres';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <DashboardPres />
  }

}

export default Dashboard;