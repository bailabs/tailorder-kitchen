import { keys, observable, action } from "mobx";
import { getLinesByTime } from "../../utils";

export default class OrderModel {
  id;
  type;
  @observable tableNo;
  @observable lines = {};
  
  constructor(id, tableNo, type, lines) {
    this.id = id;
    this.tableNo = tableNo;
    this.type = type;
    this.lines = lines;
  }

  @action
  setTableNo(tableNo) {
    this.tableNo = tableNo;
  }

  @action
  appendLines(lines) {
    this.lines = Object.assign(this.lines, lines);
  }
}
