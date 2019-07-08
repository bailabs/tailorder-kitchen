import React from "react";
import { entries } from "mobx";
import { observer } from "mobx-react";
import styled from "styled-components";

import { getLocaleTimeString } from "../utils";

const OrderCard = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  display: inline-block;
  border-radius: 5px;
  margin: 0 15px;
  min-width: 270px;

  overflow: hidden;
  -webkit-box-shadow: 0px 5px 9px 0px rgba(0,0,0,0.11);
  -moz-box-shadow: 0px 5px 9px 0px rgba(0,0,0,0.11);
  box-shadow: 0px 5px 9px 0px rgba(0,0,0,0.11);
`;

const OrderHeader = styled.div`
  color: #fff;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  padding: .75em 1em;
  
  background-color: ${props => 
    props.isFulfilled ? "#ff9f1a" : "#0079bf"
  };
`;

const OrderContent = styled.div`
  padding: 1em;
`;

const OrderType = styled.div`
  margin-bottom: 0.75em;
  font-weight: 700;
  color: #aaa;
`;

const OrderLines = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const OrderLine = styled.li`
  padding: 0.25em;
`;

const OrderTime = styled.div`
  color: #777;
`;

const OrderDetail = styled.div`
  padding: 0.25em;
  border-top: 1px solid #efefef;
`;

const _renderLines = (items) => {
  return items.map(line => 
    <OrderLine>
      {line.qty} x {line.itemName}
    </OrderLine>
  );
}

const _renderOrderByTimes = (items) => {
  return entries(items).map(([key, value]) => {
    return (
      <OrderDetail>
        <OrderTime>{ getLocaleTimeString(key) }</OrderTime>
        <OrderLines>{ _renderLines(value) }</OrderLines>
      </OrderDetail>
    );
  });
}

const Order = ({ order }) => (
  <OrderCard>
    <OrderHeader
      completed={order.isFulfilled}
      cancelled={order.isCancelled}
    >
      Table { order.tableNo }:
    </OrderHeader>
    <OrderContent>
      <OrderType>{ order.type }</OrderType>
      {_renderOrderByTimes(order.items)}
    </OrderContent>
  </OrderCard>
);

export default observer(Order);
