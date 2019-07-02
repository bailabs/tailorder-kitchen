import React from "react";
import { observer } from "mobx-react";

import Order from "./Order";

@observer
class OrderList extends React.Component {
  render() {
    return (
      <div>
        {this.props.store.orders.map(order => (
          <Order order={order} key={order.id} />
        ))}
      </div>
    );
  }
}

export default OrderList;