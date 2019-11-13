import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import SiteModel from '../../store/site';
import { observer } from 'mobx-react';
export default
@observer
class extends Component {
  render() {
    return (
      <Dialog
        open={SiteModel.modal}
        onClose={() => {
          SiteModel.changeModalState();
        }}
        aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
        <DialogContent>
          <TextField
            margin='dense'
            label='Header'
            type='text'
            required={true}
            fullWidth
            defaultValue={SiteModel.header}
            onChange={(event, target) => {
              SiteModel.header = event.target.value;
            }}
          />
          <TextField
            margin='dense'
            label='Content'
            type='text'
            required={true}
            fullWidth
            defaultValue={SiteModel.content}
            onChange={(event, target) => {
              SiteModel.content = event.target.value;
            }}
          />
          <TextField
            margin='dense'
            label='Cost'
            type='number'
            required={true}
            fullWidth
            defaultValue={SiteModel.cost}
            onChange={(event, target) => {
              SiteModel.cost = event.target.value;
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              SiteModel.id ? SiteModel.editItem() : SiteModel.addItem();
            }}
            color='primary'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
