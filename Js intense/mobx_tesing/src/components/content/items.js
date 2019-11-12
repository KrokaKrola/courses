import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Item from './item';

import ContentModel from '../../store/content';

import { observer } from 'mobx-react';

let essences = ContentModel.list.map((essence, index) => {
  return <Item key={essence.id} id={essence.id} date={essence.date} header={essence.header} content={essence.content}></Item>;
});

export default
@observer
class extends Component {
  render() {
    return (
      <Grid container spacing={8}>
        {essences}
      </Grid>
    );
  }
}
