// eslint-disable-next-line no-unused-vars
import { observable, computed, action } from 'mobx';

import ContentModel from './content';

class Site {
  @observable modal = false;
  @observable id = null;
  @observable header = null;
  @observable content = null;
  @observable cost = null;

  @action changeModalState(id, header, content, cost) {
    this.id = id;
    this.header = header;
    this.content = content;
    this.cost = cost;
    this.modal = !this.modal;
  }

  @action editItem() {
    let item = {...ContentModel.list[ContentModel.map[this.id]]};
    item.date = new Date().toISOString();
    item.header = this.header;
    item.content = this.content;
    item.cost = +this.cost;
    this.modal = false;
    ContentModel.list[ContentModel.map[this.id]] = item;
  }

  @action addItem() {
      let newItem = {};
      newItem.id = Math.round(Math.random() * 1000);
      newItem.header = this.header;
      newItem.content = this.content;
      newItem.cost = +this.cost;
      ContentModel.list.push(newItem);
      this.modal = false;
  }
}

export default new Site();
