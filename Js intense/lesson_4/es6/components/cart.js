/* global document */
import { Parody, ParodyDom } from '../parody';
import InputNumber from './input-number';

export default class Cart extends Parody {
  constructor(props) {
    super(props);

    this.initState({
      products: [{ price: 1000, rest: 10, current: 1 }, { price: 1000, rest: 10, current: 2 }]
    });
  }

  onChange(ind, val) {
    this.state.products[ind].current = val;
    // this.render();
  }

  onAdd = () => {
    this.state.products.push({
      price: 500,
      rest: 20,
      current: 1
    });
  };

  // onRemove(ind) {
  //   let products = [...this.state.products];
  //   console.log(products);
  //   products.splice(ind, 1);
  //   this.setState({ products });
  // }

  render() {
    let sum = this.state.products.reduce((total, item) => total + item.price * item.current, 0);

    let prod = this.state.products;

    let inputs = this.state.products.map((item, i) => {
      return (
        <div>
          {item.price};
          <InputNumber min={1} max={item.rest} value={item.current} change={this.onChange.bind(this, i)} />
        </div>
      );
    });

    return super.render(
      <div>
        {inputs}
        <hr />
        <div>{sum}</div>
        <input type="button" value="+" onclick={this.onAdd} />
      </div>
    );
  }
}
