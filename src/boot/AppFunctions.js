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
      console.log("COOOOOOOOOOOOM")
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
  doneOrder = (order) => {
    console.log(order)
    const { orderStore } = this.stores;
    console.log("ORDER")
      axios.post('http://localhost:5000/api/v1/done_order', order)
          .then(function(response) {
              console.log("ORDER RESPONSE")

              if (response) {
                  orderStore.doneOrder(order)

              }
          })
          .catch(function(error) {
              console.log(error);
              console.log("Something is wrong...");
          });

  }
   printOrder= (order) => {
       axios.post('http://localhost:5000/api/v1/print_order', {id: order.id})
           .then(function(response){
               console.log("RESPOOOOOOOOOOOOONSE PRINT")
           })

  }
    doneLine = (order,orderLineIndex) => {
    console.log("ORDEEEEEEEEEEEEEEEEEEEEEER")
    console.log(order)
    console.log(orderLineIndex)
    const { orderStore } = this.stores;
    console.log("ORDER")
      axios.post('http://localhost:5000/api/v1/done_order1', {id: order.id, line_id: orderLineIndex} )
          .then(function(response) {
              console.log("ORDER RESPONSE")

          })
          .catch(function(error) {
              console.log(error);
              console.log("Something is wrong...");
          });

  }

  onClose = () => {
    const { orderStore, stateStore } = this.stores;
    const data = { 'passkey': 'tailorder' };
    axios.post('http://localhost:5000/api/v1/clear_orders', data)
      .then(function(response) {
        if (response) {
          orderStore.clearOrders();
          stateStore.setModalBoolValue(true);
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