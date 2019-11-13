import React from 'react';
import { observer } from 'mobx-react';

import cartStore from '../store/cart';

export default
@observer
class extends React.Component {
  render() {
    return (
      <div>
        <input type='button' value='X' onClick={() => { cartStore.clear() }} />
        <div>In cart: {cartStore.cnt}</div>
        <div>Total: {cartStore.total}</div>
      </div>
    );
  }
}
