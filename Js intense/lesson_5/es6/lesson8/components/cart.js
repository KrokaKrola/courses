<<<<<<< HEAD
import React from 'react';
import {observer} from 'mobx-react';
import cartStore from '../store/cart';

export default @observer class extends React.Component{
    render(){
        return <div>
            <input type="button" value="x" onClick={() => cartStore.clear()} />
            <div>In Cart: {cartStore.cnt}</div>
            <div>Total: {cartStore.total}</div>
        </div>;
    }
}
=======
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
>>>>>>> 4595f63c0ef1f19ee37337a5bcf9801dae5cd38a
