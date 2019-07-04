import { observable, action, computed } from "mobx";
import { getLinesByTime } from "../../utils";

import OrderModel from "./OrderModel";

export default class OrderListModel {
  @observable orders = [];

  @action
  addOrder(order) {
    const { id, table_no, type, lines } = order;
    const linesByTime = getLinesByTime(lines);
    const newOrder = new OrderModel(id, table_no, type, linesByTime);
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
}
