/* global document */
import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = 'change' in props ? props.change : function () {
        };
    }

    _normalizeValue(val) {
        let newVal = parseInt(val);
        if (isNaN(newVal) || newVal < this.props.min) {
            newVal = this.props.min;
        } else if (newVal > this.props.max) {
            newVal = this.props.max;
        }

        this.onChange(newVal);
    }

    render() {
        return <div className="inputNumber">
            <input
                type="button"
                value="-"
                onClick={() => {
                    this._normalizeValue(this.props.value - 1);
                }}
                className="inputNumber__min"
            />
            <input
                type="text"
                value={this.props.value}
                onChange={e => {
                    this._normalizeValue(e.target.value);
                }}
                className="inputNumber__value"
            />
            <input
                type="button"
                value="+"
                onClick={() => {
                    this._normalizeValue(this.props.value + 1);
                }}
                className="inputNumber__max"
            />
        </div>
    }
}
