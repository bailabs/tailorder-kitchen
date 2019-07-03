import { observable, action } from "mobx";

import OrderModel from "./OrderModel";

export default class OrderListModel {
  @observable orders = [];

  @action
  addOrder(tableNo, type, lines) {
    this.orders.push(new OrderModel(tableNo, type, lines));
  }
}
