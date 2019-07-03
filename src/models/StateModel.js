import { observable, action } from "mobx";

export default class StateModel {
  @observable orderFilter;

  constructor() {
    this.orderFilter = "Pending";
  }

  @action
  setOrderFilter(orderFilter) {
    this.orderFilter = orderFilter;
  }
}