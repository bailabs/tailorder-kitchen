import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

import Order from "./Order";

import { filterByObject } from "../utils";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
`;

const _getFilter = (orderFilter) => {
  if (orderFilter === "Pending") {
    return { isFulfilled: false, isFinished: false,isCancelled: false };
  } else if (orderFilter === "Completed") {
    return { isFulfilled: true };
  } else if (orderFilter === "Cancelled") {
    return { isCancelled: true };
  }
};

@observer
class OrderList extends React.Component {
  render() {
    const { orders } = this.props.store;
    const { orderFilter } = this.props.stateStore;
    const filtered = filterByObject(orders, _getFilter(orderFilter));

    return (
      <List className="order-list">
        {filtered.map(order =>
          <Order order={order} key={order.id} printOrder= {(order) => this.props.printOrder(order)} done={(order) => this.props.done(order)} doneLine={(order,orderLineIndex) => this.props.doneLine(order,orderLineIndex)}/>
        )}
      </List>
    );
  }
}

export default OrderList;