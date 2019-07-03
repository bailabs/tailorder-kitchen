import React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import DevTools from "mobx-react-devtools";
import SocketIOClient from "socket.io-client";

import Header from "./components/Header";

import OrderList from "./components/OrderList";
import OrderListModel from "./models/order/OrderListModel";

const orderStore = new OrderListModel();

const Content = styled.div`
  height: 100%;
  padding: 1em;
  background-color: #eef1ef;
`;

render(
  <div>
    <DevTools />
    <Header />
    <Content>
      <OrderList store={orderStore} />
    </Content>
  </div>,
  document.getElementById("root")
);

const socket = SocketIOClient("http://localhost:5000");

socket.on('connect', function() {
  console.log('Connected to TailOrder');
  socket.on('message', function(message) {
    const lines = JSON.parse(message.lines);
    orderStore.addOrder(message.table_no, lines);
  });
});

// playing around in the console
window.orderStore = orderStore;
