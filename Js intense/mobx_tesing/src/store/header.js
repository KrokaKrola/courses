// eslint-disable-next-line no-unused-vars
import { observable, computed, action } from 'mobx';

import ContentModel from './content';

class Header {
  @observable idEssences = [1001, 1002, 1003];

  @computed get totalAmount() {
    return this.idEssences.length;
  }

  @computed get totalCost() {
    return this.idEssences.reduce((total, id) => {
      return total + ContentModel.item(id).cost;
    }, 0);
  }

  @computed get type() {
    let countTypeObject = this.idEssences.reduce((resultObject, id) => {
      resultObject[id] = (resultObject[id] || 0) + 1;
      return resultObject;
    }, {});

    let result = [];
    for (let item in countTypeObject) {
      result.push(`${countTypeObject[item]} of ${ContentModel.item(item).type}`);
    }

    return this.idEssences.length === 0 ? 'no items' : result.join(', ');
  }

  @action add(id) {
    this.idEssences.push(id);
  }

  @action remove(id) {
    let index = this.idEssences.indexOf(id);
    if (index !== -1) {
      this.idEssences.splice(index, 1);
    } else {
      ContentModel.remove(id);
    }
  }

  @action resetAll() {
    this.idEssences = [];
    ContentModel.list = [];
  }
}

export default new Header();
