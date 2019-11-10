import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.onDelete = 'delete' in props ? props.delete : function() {};
    this.onEdit = 'edit' in props ? props.edit : function() {};
  }

  // removeArticle(id, key) {
  //   this.onDelete(id, key);
  // }

  render() {
    return (
      <Grid item sm={12} md={2} className="article" style={{margin: '10px'}}>
        <span className="article__date">{this.props.dt}</span>
        <p className="article__id">{this.props.id}</p>
        <h2 className="article__title">{this.props.title}</h2>
        <h2 className="article__content">{this.props.content}</h2>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            this.onDelete(this.props.id, this.props.index);
          }}>
          Remove
        </Button>
        <Fab color="secondary" 
            aria-label="edit" 
            size="small" 
            color="primary" 
            style={{marginLeft: '10px'}} 
            onClick={() => {this.onEdit(this.props.title, this.props.content)}}
        >
          <EditIcon />
        </Fab>
      </Grid>
    );
  }
}
