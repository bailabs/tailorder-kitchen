import { observable, action } from "mobx";

import OrderModel from "./OrderModel";

export default class OrderListModel {
  @observable orders = [];

  @action
  addOrder(order) {
    const { id, table_no, type, lines } = order;
    const newOrder = new OrderModel(id, table_no, type, lines);
    this.orders.push(newOrder);
  }
}
