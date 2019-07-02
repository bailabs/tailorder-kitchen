import React from "react";
import styled from "styled-components";

const OrderCard = styled.div`
  box-sizing: border-box;
  display: inline-block;
  border: 1px solid #aaa;
  border-radius: 5px;
  padding: 1em;
  margin-right: 0.5em;
  min-width: 270px;
`;

const Order = ({ order }) => (
  <OrderCard>
    Table { order.tableNo }:
  </OrderCard>
);

export default Order;
