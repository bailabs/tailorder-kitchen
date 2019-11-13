import { keys, observable, action } from 'mobx';
import { getLinesByTime } from '../../utils';

export default class OrderModel {
  id;
  type;
  @observable tableNo;
  @observable items = {};
  @observable remarks;
  @observable isFulfilled;
  @observable isCancelled;
  @observable isFinished;

  constructor(
    id,
    tableNo,
    type,
    items,
    remarks,
    isFulfilled = false,
    isCancelled = false,
    isFinished = false
  ) {
    this.id = id;
    this.tableNo = tableNo;
    this.type = type;
    this.items = items;
    this.isFulfilled = isFulfilled;
    this.isCancelled = isCancelled;
    this.isFinished = isFinished;
    this.remarks = remarks;
  }

  @action
  setTableNo(tableNo) {
    this.tableNo = tableNo;
  }

  @action
  setItems(items) {
    this.items = items;
  }

  @action
  setRemarks(remarks) {
    this.remarks = remarks;
  }

  @action
  appendLines(lines) {
    this.items = Object.assign(this.items, items);
  }

  @action
  fulfill() {
    this.isFulfilled = true;
  }

  @action
  cancel() {
    this.isCancelled = true;
  }

  @action
  done() {
    this.isFinished = true;
  }

  @action
  uncancel() {
    this.isCancelled = false;
  }
}
