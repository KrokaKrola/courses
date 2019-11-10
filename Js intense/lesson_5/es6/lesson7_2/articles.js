import React from 'react';
import * as ArticlesModel from './model/articles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import 'babel-polyfill';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      modal: {
        open: false,
        index: null,
        title: '',
        content: '',
        errors: []
      }
    };

    ArticlesModel.all().then(articles => {
      this.setState({ articles });
    });

    this.inpTitle = React.createRef();
    this.inpContent = React.createRef();
  }

  async onDelete(index) {
    let id = this.state.articles[index].id;
    let responce = await ArticlesModel.remove(id);

    if(responce === true) {
      let articles = [...this.state.articles];
      articles.splice(index, 1);
      this.setState({articles});
    }
  }

  openModal(index, title, content) {
    let modal = Object.assign({}, this.state.modal);
    modal.open = true;
    modal.index = index;
    modal.title = title;
    modal.content = content;
    modal.errors = [];
    this.setState({modal});
  }

  closeModal = () => {
    let modal = Object.assign({}, this.state.modal);
    modal.open = false;
    this.setState({modal});
  }

  onSave = () => {
    let form = {
      title: this.inpTitle.current.value,
      content: this.inpContent.current.value
    };

    if(this.state.modal.index === null) {
      this.add(form);
    } else {
      this.edit(this.state.modal.index, form)
    }
  }

  async add(form) {
    let responce = await ArticlesModel.add(form);
    if(responce.res === true) {
      this.closeModal();
      let article = await ArticlesModel.one(responce.id);
      let articles = [...this.state.articles];
      articles.push(article);
      this.setState({articles});
    } else {
      let modal = Object.assign({}, this.state.modal);
      modal.errors = responce.errors;
      this.setState({modal});
    }
  }

  async edit(index, form) {
    let id = this.state.articles[index].id;
    let responce = await ArticlesModel.edit(id, form);

    if(responce.res === true) {
      this.closeModal();
      let article = await ArticlesModel.one(id);
      let articles = [...this.state.articles];
      articles[index] = article;
      this.setState({articles});
    } else {
      let modal = Object.assign({}, this.state.modal);
      modal.errors = responce.errors;
      this.setState({modal});
    }
  }

  render() {
    let articles = this.state.articles.map((item, i) => {
      return <Grid item sm={4} key={item.id}>
        <Card>
          <CardHeader title={item.title}></CardHeader>
          <CardContent>{item.content}</CardContent>
          <CardActions>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => { 
                this.openModal(i, item.title, item.content)
              }}>
              Edit
            </Button>
            <Button 
              variant="contained" 
              color="secondary" 
              onClick={() => {this.onDelete(i)}}>
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    });

    let errorsModal = this.state.modal.errors.map((item, i) => {
      return <p key={i}>{item}</p>
    })

    return <div>
      <Grid container spacing={8}>
        {articles}
      </Grid>
      <hr/>
      <Button
        variant="contained" 
        color="primary" 
        onClick={() => { this.openModal(null, '', '') }}>
        Add
      </Button>
      <Dialog id="edit-dialog" open={this.state.modal.open} onClose={this.closeModal}>
          <DialogContent>
            <form>
              <TextField
                margin="normal"
                label="Article title"
                defaultValue={this.state.modal.title}
                type="text"
                fullWidth
                variant="outlined"
                inputRef={this.inpTitle}
              />
              <br/>
              <TextField
                margin="normal"
                label="Article content"
                defaultValue={this.state.modal.content}
                type="text"
                fullWidth
                variant="outlined"
                rows={5}
                multiline
                inputRef={this.inpContent}
              />
            </form>
            {errorsModal}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeModal} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.onSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
    </div>;
  }
}
