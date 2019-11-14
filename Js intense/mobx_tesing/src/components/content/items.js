import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Item from './item';

import ContentModel from '../../store/content';

import { observer } from 'mobx-react';

export default
@observer
class extends Component {
  render() {
    let essences = ContentModel.list.map((essence, index) => {
      return (
        <Item
          key={essence.id}
          id={essence.id}
          date={essence.date}
          header={essence.header}
          content={essence.content}
          type={essence.type}
          cost={essence.cost}></Item>
      );
    });

    return (
      <Grid container spacing={8}>
        {essences}
      </Grid>
    );
  }
}
