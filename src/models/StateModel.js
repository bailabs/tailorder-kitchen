import { observable, action } from 'mobx';

export default class StateModel {
  @observable orderFilter;
  @observable modalbool;

  constructor() {
    this.orderFilter = 'Pending';
    this.modalbool = true;
  }

  @action
  setOrderFilter(orderFilter) {
    this.orderFilter = orderFilter;
  }
  @action
  setModalBoolValue(modalBool) {
    this.modalbool = modalBool;
  }
}
