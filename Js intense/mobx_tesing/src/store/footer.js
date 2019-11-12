// eslint-disable-next-line no-unused-vars
import { observable, computed, action } from 'mobx';

class Footer {
  @observable idEssences = [];

  @computed get total() {
    return this.idEssences.length;
  }
}

export default new Footer();
