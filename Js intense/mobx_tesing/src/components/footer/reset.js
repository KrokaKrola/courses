import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import ClearAllIcon from '@material-ui/icons/ClearAll';

import HeaderModel from '../../store/header';

export default class extends Component {
  render() {
    return (
      <div>
        <Fab
          size='small'
          color='secondary'
          aria-label='remove all'
          onClick={() => {
            HeaderModel.resetAll();
          }}>
          <ClearAllIcon />
        </Fab>
      </div>
    );
  }
}
