import { observable } from "mobx";

export default class OrderModel {
  id;
  type;
  @observable tableNo;
  @observable lines = [];
  
  constructor(id, tableNo, type, lines) {
    this.id = id;
    this.tableNo = tableNo;
    this.type = type;
    this.lines = lines;
  }
}
