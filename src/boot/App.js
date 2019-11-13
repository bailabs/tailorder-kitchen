import React from 'react';
import DevTools from 'mobx-react-devtools';

import Row from '../components/Row';
import Header from '../components/Header';
import Button from '../components/Button';
import Filter from '../components/Filter';
import OrderList from '../components/OrderList';

// Stores
import StateModel from '../models/StateModel';
import OrderListModel from '../models/order/OrderListModel';

import AppFunctions from './AppFunctions';
import SocketIO from './SocketIO';

export default function() {
  const stores = {
    stateStore: new StateModel(),
    orderStore: new OrderListModel(),
  };
  window.orderStore = stores.orderStore;
  const app = new AppFunctions(stores);

  SocketIO('http://localhost:5000', stores);

  return (
    <div id="main">
      <DevTools />
      <header className="app-header">
        <Header
          store={stores.stateStore}
          setFilterPending={app.setFilterPending}
          setFilterCompleted={app.setFilterCompleted}
          setFilterCancelled={app.setFilterCancelled}
          onClose={app.onClose}
        />
      </header>
      <content className="app-content">
        <OrderList
          store={stores.orderStore}
          stateStore={stores.stateStore}
          done={order => app.doneOrder(order)}
          printOrder={order => app.printOrder(order)}
          doneLine={(order, items) => app.doneLine(order, items)}
          uncancelOrder={order => app.uncancelOrder(order)}
        />
      </content>
    </div>
  );
}
