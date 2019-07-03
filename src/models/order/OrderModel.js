import { observable } from "mobx";

export default class OrderModel {
  id = Math.random();
  @observable tableNo;
  @observable type;
  @observable lines = [];
  
  constructor(tableNo, type, lines) {
    this.tableNo = tableNo;
    this.type = type;
    this.lines = lines;
  }
}
