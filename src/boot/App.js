import React from "react";
import DevTools from "mobx-react-devtools";

import Header from "../components/Header";

// Stores
import StateModel from "../models/StateModel";
import OrderListModel from "../models/order/OrderListModel";

const stores = {
  stateStore: new StateModel(),
  orderStore: new OrderListModel(),
};

export default function() {
  return (
    <div>
      <DevTools />
      <Header />
    </div>
  );
}