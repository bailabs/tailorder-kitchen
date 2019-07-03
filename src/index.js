import React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import DevTools from "mobx-react-devtools";
import SocketIOClient from "socket.io-client";

import App from "./boot/App";

import Header from "./components/Header";
import Filter from "./components/Filter";

import OrderList from "./components/OrderList";
import OrderListModel from "./models/order/OrderListModel";

import StateModel from "./models/StateModel";

const orderStore = new OrderListModel();
const stateStore = new StateModel();

const Content = styled.div`
  height: 100%;
  padding-top: 1em;
  background-color: #eef1ef;
`;

const Category = styled.div`
  padding: 15px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #0079bf;
  border-radius: 3px;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.15);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.15);
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.15);
`;

const BlueButton = styled(Button)`
  background-color: #0079bf;
`;

const OrangeButton = styled(Button)`
  background-color: #ff9f1a;
`;

const setPendingFilter = () => {
  stateStore.setOrderFilter("Pending");
}

const setCompletedFilter = () => {
  stateStore.setOrderFilter("Completed");
}

// render(
//   <div>
//     <DevTools />
//     <Header />
//     <Content>
//       <Category>
//         <OrangeButton onClick={setPendingFilter}>
//           Pending Order
//         </OrangeButton>
//         <BlueButton
//           style={{ marginLeft: 10 }} 
//           onClick={setCompletedFilter}
//         >
//           Completed Order
//         </BlueButton>
//       </Category>
//       <Filter store={stateStore} />
//       <OrderList store={orderStore} />
//     </Content>
//   </div>,
//   document.getElementById("root")
// );

const socket = SocketIOClient("http://localhost:5000");

socket.on('connect', function() {
  console.log('Connected to TailOrder');
  socket.on('message', function({ table_no, type, lines }) {
    const linesArr = JSON.parse(lines);
    orderStore.addOrder(table_no, type, linesArr);
  });
});

// Playing around in the console
window.orderStore = orderStore;

// Display the app
render(<App />, document.getElementById("root"));