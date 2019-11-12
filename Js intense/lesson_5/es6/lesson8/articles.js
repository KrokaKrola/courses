import React from 'react';
import 'babel-polyfill';
import * as ArticlesModel from './model/articles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

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

<<<<<<< HEAD
    ArticlesModel.all().then((articles) => {
      this.setState({articles});
=======
    ArticlesModel.all().then(articles => {
      this.setState({ articles });
>>>>>>> 4595f63c0ef1f19ee37337a5bcf9801dae5cd38a
    });

    this.titleRef = React.createRef();
    this.contentRef = React.createRef();
  }

<<<<<<< HEAD
  deleteArticle = async (index) => {
    let id = this.state.articles[index].id;
    let responce = await ArticlesModel.remove(id);

    if(responce === true) {
      let articles = [...this.state.articles];
      articles.splice(index, 1);
      this.setState({articles});
    }
  }
=======
  deleteArticle = async index => {
    let id = this.state.articles[index].id;
    let responce = await ArticlesModel.remove(id);

    if (responce === true) {
      let articles = [...this.state.articles];
      articles.splice(index, 1);
      this.setState({ articles });
    }
  };
>>>>>>> 4595f63c0ef1f19ee37337a5bcf9801dae5cd38a

  modalClose = () => {
    let modal = Object.assign({}, this.state.modal);
    modal.open = false;
<<<<<<< HEAD
    this.setState({modal});
  }
=======
    this.setState({ modal });
  };
>>>>>>> 4595f63c0ef1f19ee37337a5bcf9801dae5cd38a

  modalOpen = (index, title, content) => {
    let modal = Object.assign({}, this.state.modal);
    modal.open = true;
    modal.index = index;
    modal.title = title;
    modal.content = content;
    modal.errors = [];
    this.setState({ modal });
<<<<<<< HEAD
  }
=======
  };
>>>>>>> 4595f63c0ef1f19ee37337a5bcf9801dae5cd38a

  saveArticle = () => {
    let data = {
      title: this.titleRef.current.value,
      content: this.contentRef.current.value
    };
<<<<<<< HEAD
    this.state.modal.index === null ? this.addArticle(data) : this.editArticle(this.state.modal.index , data);
  }

  async addArticle(article) {
    let responce = await ArticlesModel.add(article);
    if(responce.res === true) {
=======
    this.state.modal.index === null ? this.addArticle(data) : this.editArticle(this.state.modal.index, data);
  };

  async addArticle(article) {
    let responce = await ArticlesModel.add(article);
    if (responce.res === true) {
>>>>>>> 4595f63c0ef1f19ee37337a5bcf9801dae5cd38a
      this.modalClose();
      let article = await ArticlesModel.one(responce.id);
      let articles = [...this.state.articles];
      articles.push(article);
      this.setState({ articles });
    } else {
      let modal = Object.assign({}, this.state.modal);
      modal.errors = responce.errors;
<<<<<<< HEAD
      this.setState({modal});
=======
      this.setState({ modal });
>>>>>>> 4595f63c0ef1f19ee37337a5bcf9801dae5cd38a
    }
  }

  async editArticle(index, articleData) {
    let id = this.state.articles[index].id;
    let responce = await ArticlesModel.edit(id, articleData);
<<<<<<< HEAD
    if(responce.res === true) {
=======
    if (responce.res === true) {
>>>>>>> 4595f63c0ef1f19ee37337a5bcf9801dae5cd38a
      let article = await ArticlesModel.one(id);
      this.modalClose();
      let articles = [...this.state.articles];
      articles[index] = article;
      this.setState({ articles });
<<<<<<< HEAD
    }  else {
      let modal = Object.assign({}, this.state.modal);
      modal.errors = responce.errors;
      this.setState({modal});
=======
    } else {
      let modal = Object.assign({}, this.state.modal);
      modal.errors = responce.errors;
      this.setState({ modal });
>>>>>>> 4595f63c0ef1f19ee37337a5bcf9801dae5cd38a
    }
  }

  render() {
    let articles = this.state.articles.map((item, index) => {
<<<<<<< HEAD
      return <Grid item key={item.id} sm={6} md={4} lg={3}>
        <Card>
          <CardHeader title={item.title}>
          </CardHeader>
          <CardContent>
            {item.content}
          </CardContent>
          <CardActions>
          <Button variant="contained" color="primary" onClick={() => { this.modalOpen(index, item.title, item.content) }} >
            Edit
          </Button>
          <Button variant="contained" color="secondary" onClick={() => { this.deleteArticle(index) }} >
            Delete
          </Button>
          </CardActions>
        </Card>
      </Grid>
    });
    let errors = this.state.modal.errors.map((item, index) => {
      return <p key={index}>{item}</p>;
    })
    return <div>
      <Grid container spacing={8}>
        {articles}
      </Grid>
      <hr/>
      <Button variant="contained" color="primary" onClick={() => this.modalOpen(null, '', '')}>Add</Button>
      <Dialog open={this.state.modal.open} onClose={this.modalClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <form>
            <TextField
              margin="dense"
              label="Article title"
              type="text"
              defaultValue={this.state.modal.title}
              inputRef={this.titleRef}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Article content"
              type="text"
              defaultValue={this.state.modal.content}
              inputRef={this.contentRef}
              fullWidth
            />
          </form>
          {errors}
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => { this.saveArticle() }}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  }
}
=======
      return (
        <Grid item key={item.id} sm={6} md={4} lg={3}>
          <Card>
            <CardHeader title={item.title}></CardHeader>
            <CardContent>{item.content}</CardContent>
            <CardActions>
              <Button
                variant='contained'
                color='primary'
                onClick={() => {
                  this.modalOpen(index, item.title, item.content);
                }}>
                Edit
              </Button>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => {
                  this.deleteArticle(index);
                }}>
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });
    let errors = this.state.modal.errors.map((item, index) => {
      return <p key={index}>{item}</p>;
    });
    return (
      <div>
        <Grid container spacing={8}>
          {articles}
        </Grid>
        <hr />
        <Button variant='contained' color='primary' onClick={() => this.modalOpen(null, '', '')}>
          Add
        </Button>
        <Dialog open={this.state.modal.open} onClose={this.modalClose} aria-labelledby='form-dialog-title'>
          <DialogContent>
            <form>
              <TextField
                margin='dense'
                label='Article title'
                type='text'
                defaultValue={this.state.modal.title}
                inputRef={this.titleRef}
                fullWidth
              />
              <TextField
                margin='dense'
                label='Article content'
                type='text'
                defaultValue={this.state.modal.content}
                inputRef={this.contentRef}
                fullWidth
              />
            </form>
            {errors}
          </DialogContent>
          <DialogActions>
            <Button
              color='primary'
              onClick={() => {
                this.saveArticle();
              }}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
>>>>>>> 4595f63c0ef1f19ee37337a5bcf9801dae5cd38a
