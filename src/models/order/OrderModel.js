import { observable } from "mobx";

export default class OrderModel {
  id = Math.random();
  @observable tableNo;

  constructor(tableNo) {
    this.tableNo = tableNo;
  }
}
