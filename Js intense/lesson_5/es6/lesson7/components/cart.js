/* global document */
import InputNumber from './input-number';
import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [
                {price: 1000, rest: 10, current: 1},
                {price: 1000, rest: 10, current: 2}
            ]
        };
    }

    onChange(ind, val) {
        let products = [...this.state.products];
        let product = Object.assign({}, this.state.products[ind]);
        product.current = val;
        products[ind] = product;
        this.setState({products});
    }

    render() {
        let sum = this.state.products.reduce((total, item) => total + item.price * item.current, 0);

        let inputs = this.state.products.map((item, i) => {
            return <InputNumber
                key={i}
                min={1}
                max={item.rest}
                value={item.current}
                change={(val) => {
                    this.onChange(i, val)
                }}
            />
        });

        return <div>
            {inputs}
            <hr/>
            <div>{sum}</div>
        </div>
    }
}
