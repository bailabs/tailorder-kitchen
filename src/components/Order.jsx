import React from "react";
import styled from "styled-components";

const OrderCard = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  display: inline-block;
  border-radius: 5px;
  margin-right: 1em;
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
  background-color: #0079bf;
  padding: .75em 1em;
`;

const OrderContent = styled.div`
  padding: 1em;
`;

const OrderLines = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const OrderLine = styled.li`
  padding: 0.25em;
`;

const _renderOrderLines = (lines) => {
  return lines.map((line, id) =>
    <OrderLine key={`order-line-${id}`}>
      {line.qty} x {line.itemName}
    </OrderLine>
  );
}

const Order = ({ order }) => (
  <OrderCard>
    <OrderHeader>
      Table { order.tableNo }:
    </OrderHeader>
    <OrderContent>
      <OrderLines>
        {_renderOrderLines(order.lines)}
      </OrderLines>
    </OrderContent>
  </OrderCard>
);

export default Order;
