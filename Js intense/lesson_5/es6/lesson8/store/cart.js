<<<<<<< HEAD
import {observable, computed, action} from 'mobx';
import productsStore from './products';

class Cart{
    @observable idProducts = [];

    @computed get cnt(){
        return this.idProducts.length;
    }

    @computed get inCart(){
        return (id) => this.idProducts.indexOf(id) !== -1;
    }

    @computed get total(){
        return this.idProducts.reduce((total, id) => {
            return total + productsStore.item(id).price;
        }, 0);
    }

    @action add(id){
        if(this.idProducts.indexOf(id) === -1){
            this.idProducts.push(id);
        }
    }

    @action remove(id){
        let ind = this.idProducts.indexOf(id);

        if(this.idProducts.indexOf(id) !== -1){
            this.idProducts.splice(ind, 1);
        }
    }

    @action clear(){
        this.idProducts = [];
    }
}

export default new Cart();
=======
import { observable, action, computed } from 'mobx';
import productsStore from './products';

class Cart {
  @observable idProducts = [];

  @computed get cnt() {
    return this.idProducts.length;
  }

  @computed get inCart() {
    return (id) => this.idProducts.indexOf(id) === -1;
  }

  @computed get total() {
    return this.idProducts.reduce((total, id) =>{
      return total + productsStore.item(id).price;
    }, 0);
  }

  @action add(id) {
    if(this.idProducts.indexOf(id) === -1) {
      this.idProducts.push(id);
    }
  }

  @action remove(id) {
    let ind = this.idProducts.indexOf(id);
    if(this.idProducts.indexOf(id) !== -1) {
      this.idProducts.splice(ind);
    }
  }

  @action clear() {
    this.idProducts = [];
  }
}

export default new Cart();
>>>>>>> 4595f63c0ef1f19ee37337a5bcf9801dae5cd38a
