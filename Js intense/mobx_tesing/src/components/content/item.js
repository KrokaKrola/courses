import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import RemoveIcon from '@material-ui/icons/Remove';
import CopyIcon from '@material-ui/icons/FileCopy';

import { observer } from 'mobx-react';

import HeaderModel from '../../store/header';
import ContentModel from '../../store/content';
import SiteModel from '../../store/site';

export default
@observer
class extends Component {
  render() {
    return (
      <Grid item sm={4}>
        <Card>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              {this.props.date}
            </Typography>
            <Typography variant='h5' component='h2'>
              {this.props.header}
            </Typography>
            <Typography color='textSecondary'>{this.props.content}</Typography>
          </CardContent>
          <CardActions className='cardButtons'>
            <Fab
              size='small'
              color='primary'
              aria-label='add'
              onClick={() => {
                HeaderModel.add(this.props.id);
              }}>
              <AddIcon />
            </Fab>
            <Fab
              size='small'
              color='primary'
              aria-label='edit'
              onClick={() => {
                SiteModel.changeModalState(
                  this.props.id,
                  this.props.header,
                  this.props.content,
                  this.props.cost
                );
              }}>
              <EditIcon />
            </Fab>
            <Fab
              size='small'
              color='default'
              aria-label='copy'
              onClick={() => {
                ContentModel.addCopy(this.props.id);
              }}>
              <CopyIcon />
            </Fab>
            <Fab
              size='small'
              color='secondary'
              aria-label='copy'
              onClick={() => {
                HeaderModel.remove(this.props.id);
              }}>
              <RemoveIcon />
            </Fab>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}
