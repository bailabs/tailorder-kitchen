import { observable, action, computed } from "mobx";
import { groupByProperty } from "../../utils";

import OrderModel from "./OrderModel";

export default class OrderListModel {
  @observable orders = [];

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
    } = order;

    const itemsByTime = groupByProperty(items, 'creation');
    const newOrder = new OrderModel(
      id,
      table_no,
      type,
      itemsByTime,
      remarks,
      is_fulfilled,
      is_cancelled
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
    const linesByTime = getLinesByTime(order.lines);
    existingOrder && existingOrder.appendLines(linesByTime);
  }

  @action
  fulfillOrder(order) {
    let existingOrder = this.getOrder(order.id);
    existingOrder && existingOrder.fulfill();    
  }

  @action
  cancelOrder(order) {
    let existingOrder = this.getOrder(order.id);
    existingOrder && existingOrder.cancel();
  }
}
