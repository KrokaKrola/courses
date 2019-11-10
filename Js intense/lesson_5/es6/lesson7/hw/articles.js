/* eslint-disable no-undef */
import React from 'react';
import { server } from './server';
import Article from './article';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      open: false,
      openEdit: false
    };
    this.getArticles();
  }

  async getArticles() {
    try {
      const articlesResponce = await server.get();
      const articles = articlesResponce.data;
      this.setState({ articles });
    } catch(e) {
      console.log(e.message);
    }
  }

  async onDelete(id, index) {
    try {
      const serverResponce = await server({
        method: 'DELETE',
        params: { id }
      });
  
      if (serverResponce) {
        let articles = this.state.articles;
        articles.splice(index, 1);
        this.setState({ articles });
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  addArticle = async () => {
    try {
      let formData = new FormData();
      let title = document.querySelector('#title').value,
          content = document.querySelector('#content').value;
      formData.append('title', title);
      formData.append('content', content);
      const serverResponce = await server({
        method: 'POST',
        data: formData
      });
  
      if (serverResponce) {
        this.modalClose();
        this.getArticles();
      }
    } catch(e) {
      console.log(e.message);
    }
  }

  modalOpen = () => {
    this.setState({open: true})
  }

  modalClose = () => {
    this.setState({open: false})
  }

  modalEditOpen = () => {
    this.setState({openEdit: true})
  }

  modalEditClose = () => {
    this.setState({openEdit: false})
  }

  onEdit = (title, content) => {
    this.modalEditOpen();
    window.setTimeout(() => {
      let titleDom = document.querySelector('#edit_title');
      let contentDom = document.querySelector('#edit_content');

      titleDom.value = title;
      contentDom.value = content;
    }, 500);
  }

  render() {
    let articles = this.state.articles.map((item, index) => {
      return (
        <Article
          date={item.dt}
          id={item.id}
          title={item.title}
          content={item.content}
          key={index}
          index={index}
          delete={(id, key) => {
            this.onDelete(id, key);
          }}
          edit={(title, content) => {
            this.onEdit(title,content);
          }}
          >
        </Article>
      );
    });
    return (
      <div>
        <Grid style={{margin: '20px'}} container className="articles" spacing={16} >
          {articles}
        </Grid>
          <Divider style={{margin: '20px 0'}} />
          <Button
          style={{margin: '20px'}}
          variant="contained"
          color="primary"
          onClick={this.modalOpen}>
          Add article
        </Button>
        <Dialog open={this.state.open} onClose={this.modalClose}>
          <DialogTitle id="form-dialog-title">Adding article</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter article info
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Article title"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="content"
              label="Article content"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.modalClose} color="primary">
              Cancel
            </Button>
            <Button color="primary" onClick={this.addArticle}>
              Add article
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog id="edit-dialog" open={this.state.openEdit} onClose={this.modalEditClose}>
          <DialogTitle id="form-dialog-title">Adding article</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter article info
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="edit_title"
              label="Article title"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="edit_content"
              label="Article content"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.modalEditClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
