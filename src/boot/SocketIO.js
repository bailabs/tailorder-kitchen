import SocketIOClient from "socket.io-client";

function onConnect() {
  const { socket, stores } = this;
  
  socket.on('create', function(order) {
    stores.orderStore.addOrder(order);
  });

  socket.on('update', function(order) {
    if (order.additional) {
      stores.orderStore.additionalOrder(order);
    }
  });
}

export default function(address, stores) {
  const socket = new SocketIOClient(address);
  const obj = { socket, stores };
  socket.on('connect', onConnect.bind(obj));
}