export default class AppFunctions {
  constructor(stateStore) {
    this.stateStore = stateStore;
  }
  setFilterPending = () => {
    this.stateStore.setOrderFilter("Pending");
  }
  setFilterCompleted = () => {
    this.stateStore.setOrderFilter("Completed");
  }
}