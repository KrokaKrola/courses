<<<<<<< HEAD
import {observable, computed} from 'mobx';

class Products{
    @observable list = [
        {id: 1, title: 'Iphone XX', price: 75000},
        {id: 2, title: 'Samsung S200', price: 55000},
        {id: 5, title: 'Asus Zen 500', price: 25000}
    ];

    @computed get mapId(){
        let map = {};

        this.list.forEach((item, i) => {
            map[item.id] = i
        });

        return map;
    }

    @computed get item(){
        return (id) => this.list[this.mapId[id]];
    }
}

export default new Products();
=======
import { observable, computed } from 'mobx';

class Products {
  @observable list = [
    { id: 1, title: 'Iphone XX', price: 75000 },
    { id: 2, title: 'Test phone', price: 125000 },
    { id: 3, title: 'Fodaphone XX', price: 25000 }
  ];

  @computed get mapId() {
    let map = {};
    this.list.forEach((item, i) => {
      map[item.id] = i;
    });

    return map;
  }

  @computed get item() {
    return id => this.list[this.mapId[id]];
  }
}

export default new Products();
>>>>>>> 4595f63c0ef1f19ee37337a5bcf9801dae5cd38a
