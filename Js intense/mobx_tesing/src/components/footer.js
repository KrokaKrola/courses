import React, { Component } from 'react';
import Reset from './footer/reset';
import Add from './footer/add';
import Grid from '@material-ui/core/Grid';

export default class extends Component {
  render() {
    return (
      <div>
        <Grid container alignItems="center" className='footerGrid'>
          <Reset></Reset>
          <Add></Add>
        </Grid>
      </div>
    );
  }
}
