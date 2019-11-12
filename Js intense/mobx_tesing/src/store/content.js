// eslint-disable-next-line no-unused-vars
import { observable, computed } from 'mobx';

class Content {
  @observable list = [
    {
      id: 1001,
      date: 'Tue, 12 Nov 2019 18:50:05',
      header: 'Phone',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      type: 'device',
      cost: 3500
    },
    {
      id: 1002,
      date: 'Tue, 13 Nov 2019 18:50:05',
      header: 'Apple',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      type: 'food',
      cost: 25
    },
    {
      id: 1003,
      date: 'Tue, 14 Nov 2019 18:50:05',
      header: 'T-shirt',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      type: 'cloth',
      cost: 500
    }
  ];


  @computed get map() {
    let map = {};
    this.list.forEach((item, i) => {
      map[item.id] = i;
    });
    return map;
  }

  @computed get item() {
    return id => this.list[this.map[id]];
  }

}

export default new Content();
