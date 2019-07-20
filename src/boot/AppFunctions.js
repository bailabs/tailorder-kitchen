import axios from 'axios';

export default class AppFunctions {
  constructor(stores) {
    this.stores = stores;
    this.fetchOrders();
  }
  setFilterPending = () => {
    this.stores.stateStore.setOrderFilter("Pending");
  }
  setFilterCompleted = () => {
    this.stores.stateStore.setOrderFilter("Completed");
  }
  setFilterCancelled = () => {
    this.stores.stateStore.setOrderFilter("Cancelled");
  }
  getFilter = () => {
    return {
      isFulfilled: this.stores.stateStore.orderFilter === "Completed",
      isCancelled: this.stores.stateStore.orderFilter === "Cancelled"
    }
  }
  fetchOrders = () => {
    const { orderStore } = this.stores;
    axios.get('http://localhost:5000/api/v1/all_orders/')
      .then(function(response) {
        _loadOrders(orderStore, response.data);
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {
        console.log("finally");
      });
  }
  onClose = () => {
    const { orderStore } = this.stores;
    const data = { 'passkey': 'tailorder' };
    axios.post('http://localhost:5000/api/v1/clear_orders', data)
      .then(function(response) {
        if (response) {
          orderStore.clearOrders();
        }
      })
      .catch(function(error) {
        console.log(error);
        console.log("Something is wrong...");
      });
  }
}

function _loadOrders(orderStore, orders) {
  orders.forEach(order => {
    orderStore.addOrder(order);
  });
}