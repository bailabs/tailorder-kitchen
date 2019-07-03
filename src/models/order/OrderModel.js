import { observable } from "mobx";

export default class OrderModel {
  id = Math.random();
  @observable tableNo;
  @observable lines = [];
  
  constructor(tableNo, lines) {
    this.tableNo = tableNo;
    this.lines = lines;
  }
}
