import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import SocketIOClient from "socket.io-client";

import OrderList from "./components/OrderList";
import OrderListModel from "./models/order/OrderListModel";

const orderStore = new OrderListModel();

const socket = SocketIOClient("http://localhost:5000");

socket.on('connect', function() {
  console.log('Connected to TailOrder');
  socket.on('message', function(message) {
    orderStore.addOrder(message.table_no);
  });
});

render(
  <div>
    <DevTools />
    <OrderList store={orderStore} />
  </div>,
  document.getElementById("root")
);

// playing around in the console
window.orderStore = orderStore;
