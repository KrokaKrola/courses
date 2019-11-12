import React, { Component } from 'react';

import { observer } from 'mobx-react';

import HeaderModel from '../../store/header';

export default
@observer
class extends Component {
  render() {
    return (
      <div>
        <p>Total counter: {HeaderModel.totalAmount}</p>
      </div>
    );
  }
}
