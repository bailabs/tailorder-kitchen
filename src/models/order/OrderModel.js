import { keys, observable, action } from "mobx";
import { getLinesByTime } from "../../utils";

export default class OrderModel {
  id;
  type;
  @observable tableNo;
  @observable items = {};
  @observable isFulfilled;
  @observable isCancelled;
  
  constructor(id, tableNo, type, items, isFulfilled=false, isCancelled=false) {
    this.id = id;
    this.tableNo = tableNo;
    this.type = type;
    this.items = items;
    this.isFulfilled = isFulfilled;
    this.isCancelled = isCancelled;
  }

  @action
  setTableNo(tableNo) {
    this.tableNo = tableNo;
  }

  @action
  appendLines(lines) {
    this.items = Object.assign(this.items, items);
  }
}
