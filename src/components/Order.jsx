import React from "react";
import { entries } from "mobx";
import { observer } from "mobx-react";
import styled from "styled-components";

import OrderTimer from "./OrderTimer";

import { getLocaleTimeString } from "../utils";

const OrderCard = styled.div`
  flex: 0 1 230px;
  background-color: #fff;
  box-sizing: border-box;
  display: block;
  border-radius: 5px;
  margin: 20px 15px;

  overflow: hidden;
  -webkit-box-shadow: 0px 5px 9px 0px rgba(0,0,0,0.11);
  -moz-box-shadow: 0px 5px 9px 0px rgba(0,0,0,0.11);
  box-shadow: 0px 5px 9px 0px rgba(0,0,0,0.11);
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  padding: .75em 1em;
  
  background-color: ${props => 
    props.isFulfilled ? "#0079bf" : "#ff9f1a"
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
  color: ${props =>
    props.isVoided ? "#eb5a46": "#333"
  };
  text-decoration: ${props => 
    props.isVoided ? "line-through" : "none"
  };
`;

const OrderTime = styled.div`
  color: #777;
`;

const OrderDetail = styled.div`
  padding: 0.25em;
  border-top: 1px solid #efefef;
`;

const OrderRemarks = styled.pre`
  margin: 0;
  line-height: 100%;
`;

const OrderFooter = styled.div`
  padding: 1em;
`;

const TextRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: #aaa;
  font-weight: 700;
  padding-bottom: 0.35em;
  margin-bottom: 0.50em;

  border-bottom: ${props => 
    props.underline ? "1px solid #efefef" : "0"
  };
`;

const _renderLines = (items) => {
  return items.map(line => 
    <OrderLine isVoided={line.is_voided}>
      {line.qty} x {line.item_name}
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
      isFulfilled={order.isFulfilled}
      isCancelled={order.isCancelled}
    >
      <div>
        Table { order.tableNo }:
      </div>
      <OrderTimer />
    </OrderHeader>
    <OrderContent>
      <TextRow underline={false}>
        <div>Order No. {order.id}</div>
        <div>{order.type}</div>
      </TextRow>
      {_renderOrderByTimes(order.items)}
    </OrderContent>
    <OrderFooter>
      <TextRow>Remarks</TextRow>
      <OrderRemarks>{order.remarks}</OrderRemarks>
    </OrderFooter>
  </OrderCard>
);

export default observer(Order);
