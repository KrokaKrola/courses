import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default class extends Component {

  render() {
    return (
      <div>
        <Fab size="small" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    );
  }
}
