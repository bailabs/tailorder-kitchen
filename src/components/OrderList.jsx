import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

import Order from "./Order";

const List = styled.div`
  white-space: nowrap;
  overflow-x: auto;
  padding-bottom: 15px;
`;

@observer
class OrderList extends React.Component {
  render() {
    return (
      <List className="order-list">
        {this.props.store.orders.map(order => (
          <Order order={order} key={order.id} />
        ))}
      </List>
    );
  }
}

export default OrderList;