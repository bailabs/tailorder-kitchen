import { observable, action, computed } from 'mobx';
import { groupByProperty } from '../../utils';

import OrderModel from './OrderModel';

export default class OrderListModel {
  @observable orders = [];

  @action
  clearOrders() {
    this.orders = [];
  }

  @action
  addOrder(order) {
    const {
      id,
      table_no,
      type,
      items,
      remarks,
      is_fulfilled,
      is_cancelled,
      is_finished,
    } = order;

    const itemsByTime = groupByProperty(items, 'creation');
    const newOrder = new OrderModel(
      id,
      table_no,
      type,
      itemsByTime,
      remarks,
      is_fulfilled,
      is_cancelled,
      is_finished
    );

    this.orders.push(newOrder);
  }

  @action
  getOrder(id) {
    const filteredOrder = this.orders.filter(order => order.id === id);
    return filteredOrder ? filteredOrder[0] : null;
  }

  @action
  additionalOrder(order) {
    let existingOrder = this.getOrder(order.id);
    if (existingOrder) {
      const itemsByTime = groupByProperty(order.items, 'creation');
      existingOrder.setItems(itemsByTime);
    }
  }

  @action
  fulfillOrder(order) {
    let existingOrder = this.getOrder(order.id);
    existingOrder && existingOrder.fulfill();
  }
  @action
  doneOrder(order) {
    let existingOrder = this.getOrder(order.id);
    existingOrder && existingOrder.done();
  }
notDoneOrder(order) {
    let existingOrder = this.getOrder(order.id);
    existingOrder && existingOrder.notdone();
  }

  @action
  cancelOrder(order) {
    let existingOrder = this.getOrder(order.id);
    existingOrder && existingOrder.cancel();
  }

  @action
  uncancelOrder(order) {
    let existingOrder = this.getOrder(order.id);
    existingOrder && existingOrder.uncancel();
  }

  @action
  voidOrder(order) {
    let existingOrder = this.getOrder(order.id);
    if (existingOrder) {
      const itemsByTime = groupByProperty(order.items, 'creation');
      existingOrder.setItems(itemsByTime);
      existingOrder.setRemarks(order.remarks);
    }
  }
  @action
  doneLineOrder(order) {
    let existingOrder = this.getOrder(order.id);
    if (existingOrder) {
      const itemsByTime = groupByProperty(order.items, 'creation');
      existingOrder.setItems(itemsByTime);
      existingOrder.setRemarks(order.remarks);
    }
  }
}
