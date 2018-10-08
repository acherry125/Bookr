import React from 'react';
import _ from 'lodash';

import { Column, Row, Result } from 'components/presentational/styled';

export default class Results extends React.Component {

  renderItem(result) {
    const { title, author, lastUpdated, numRecords } = result;
    return (
      <Result>
        <Column>
          <Row><a href="#">{title}</a></Row>
          <Row>{author}</Row>
        </Column>
      </Result>
    )
  }

  render() {

    const { results } = this.props;

    const items = results.items;

    return (
      <Column>
        {_.map(items, (result) => {
          return this.renderItem(result);
        })}
      </Column>
    );
  }
}