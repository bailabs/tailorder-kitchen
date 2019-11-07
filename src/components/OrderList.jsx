import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import Order from './Order';

import { filterByObject, groupByRows } from '../utils';

const ORDERS_PER_ROW = 4;

const List = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
`;

const _getFilter = orderFilter => {
  if (orderFilter === 'Pending') {
    return { isFulfilled: false, isFinished: false, isCancelled: false };
  } else if (orderFilter === 'Completed') {
    return { isFulfilled: true };
  } else if (orderFilter === 'Cancelled') {
    return { isCancelled: true };
  }
};

const _renderByColumns = (orderColumns, props) =>
  orderColumns.map(order => (
    <Order
      order={order}
      key={order.id}
      printOrder={order => props.printOrder(order)}
      done={order => props.done(order)}
      doneLine={(order, index) => props.doneLine(order, index)}
    />
  ));

const _renderByRows = (orderRows, props) =>
  orderRows.map(orderRow => (
    <List className="order-list">{_renderByColumns(orderRow, props)}</List>
  ));

@observer
class OrderList extends React.Component {
  render() {
    const { orders } = this.props.store;
    const { orderFilter } = this.props.stateStore;
    const filtered = filterByObject(orders, _getFilter(orderFilter));
    const ordersByRows = groupByRows(filtered, ORDERS_PER_ROW);
    return _renderByRows(ordersByRows, this.props);
    // return (
    //   <List className="order-list">column
    //     {filtered.map(order =>
    //       <Order order={order} key={order.id} printOrder= {(order) => this.props.printOrder(order)} done={(order) => this.props.done(order)} doneLine={(order,orderLineIndex) => this.props.doneLine(order,orderLineIndex)}/>
    //     )}
    //   </List>
    // );
  }
}

export default OrderList;
