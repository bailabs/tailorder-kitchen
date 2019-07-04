import React from "react";
import DevTools from "mobx-react-devtools";

import Row from "../components/Row";
import Header from "../components/Header";
import Content from "../components/Content";
import Button from "../components/Button";
import Filter from "../components/Filter";

// Stores
import StateModel from "../models/StateModel";
import OrderListModel from "../models/order/OrderListModel";

import AppFunctions from "./AppFunctions";
import SocketIO from "./SocketIO";

export default function() {
  
  const stores = {
    stateStore: new StateModel(),
    orderStore: new OrderListModel(),
  };

  const app = new AppFunctions(stores.stateStore);

  SocketIO("http://localhost:5000", stores);

  return (
    <div>
      <DevTools />
      <Header />
      <Content>
        <Row>
          <Button
            secondary
            onClick={app.setFilterPending}
          >
            Pending Order
          </Button>
          <Button
            style={{ marginLeft: 10 }}
            onClick={app.setFilterCompleted}
          >
            Completed Order
          </Button>
        </Row>
        <Filter store={stores.stateStore} />
      </Content>
    </div>
  );
}