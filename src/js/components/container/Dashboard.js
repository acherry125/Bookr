import React from 'react';

import { DashboardPres } from 'components/presentational/dashboard/DashboardPres';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  render() {
    return <DashboardPres />
  }

}

export default Dashboard;