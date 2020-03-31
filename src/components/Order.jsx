import React from 'react';

import { entries } from 'mobx';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import OrderTimer from './OrderTimer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { getLocaleTimeString } from '../utils';

const OrderCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  margin: 20px 15px;
  padding-bottom: 10px;
  font-size: 14px;
  -webkit-box-shadow: 0px 5px 9px 0px rgba(0,0,0,0.11);
  -moz-box-shadow: 0px 5px 9px 0px rgba(0,0,0,0.11);
  box-shadow: 0px 5px 9px 0px rgba(0,0,0,0.11);
`;

const OrderHeader = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  padding: 0.75em 1em;
  background-color: ${props => (props.isFulfilled ? '#0079bf' : '#ff9f1a')};
  
`;

const OrderContent = styled.div`
  padding: 1em;
    font-size: 16px;
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
const OrderButton = styled.button`
width: 100%;
  font-size: 14px;
`;

const Button = styled.button`
  margin: 0.3em 0.5em;
  color: white;
  background-color: ${props => (props.active ? '#007ac1' : '#03a9f4')};
  display: inline-block;
  font-weight: bold;
  padding: 1.2em 1.2em;
  border: none;
`;

const DoneOrderButton = styled.button`
    
  margin: 0.3em 0.5em;
  color: white;
  background-color: ${props => (props.active ? '#007ac1' : '#03a9f4')};
  display: inline-block;
  font-weight: bold;
  padding: 1.2em 1.2em;
  border: none;
`;

const PrintOrderButton = styled.button`
  margin: 0.3em 0.5em;
  color: white;
  background-color: ${props => (props.active ? '#007ac1' : '#03a9f4')};
  display: inline-block;
  font-weight: bold;
  padding: 1.2em 1.2em;
  border: none;
`;

const OrderLine = styled.li`
width: 100%;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0.25em;
  color: ${props =>
    props.isVoided ? '#eb5a46' : props.isDone ? '#228B22' : '#333'};
  text-decoration: ${props => (props.isVoided ? 'line-through' : 'none')};
`;

const OrderTime = styled.div`
  color: #777;
`;

const OrderDetail = styled.div`
  padding: 0.25em;
  border-top: 1px solid #efefef;
  width: 100%
`;

const OrderRemarks = styled.pre`
  font-size: 18px;

  margin: 0;
  line-height: 100%;
`;

const OrderFooter = styled.div`
  padding: 1em;

`;

const OrderLineBoundary = styled.div`
  width 3em;
  margin-left: 3em;
`;

const TextRow = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  color: #aaa;
  font-weight: 700;
  padding-bottom: 0.35em;
  margin-bottom: 0.5em;

  border-bottom: ${props => (props.underline ? '1px solid #efefef' : '0')};
`;

const _checkItemRemark = item => {
  const length = item.item_name.length;
  const lastChar = item.item_name[length - 1];
  if (lastChar === '*') {
    return true;
  }
  return false;
};
const _renderLines = (items, order, doneLine) => {
  return items.map((item, index) => {
    const remark = _checkItemRemark(item);
      console.log('ITEEEEEMS');
      console.log(item);
    return (
      <OrderLine key={index} isVoided={item.is_voided} isDone={item.is_done}>

          {remark ? `${item.item_name}` : `${item.qty} x ${item.item_name}`}

          <OrderLineBoundary>
              {item.is_done ? (
                  <FontAwesomeIcon icon={faCheck} color="#228B22" />
              ) : (
                  <OrderButton onClick={() => doneLine(order, item.id)}>
                      Done
                  </OrderButton>
              )}
          </OrderLineBoundary>

      </OrderLine>
    );
  });
};

const _renderOrderByTimes = (items, order, doneLine) => {
  return entries(items).map(([key, value]) => {

    return (
      <OrderDetail>
        <OrderTime>{getLocaleTimeString(key)}</OrderTime>
        <OrderLines>{_renderLines(value, order, doneLine)}</OrderLines>
      </OrderDetail>
    );
  });
};

const Order = ({ order, done, doneLine, printOrder, uncancelOrder }) => (
  <OrderCard>
    <OrderHeader
      isFulfilled={order.isFulfilled}
      isCancelled={order.isCancelled}
    >
      <div>Table {order.tableNo}:</div>
      <OrderTimer />
    </OrderHeader>
    <OrderContent>
      <TextRow underline={false}>
        <div>Order {order.id}</div>
        <div>{order.type}</div>
      </TextRow>
      {_renderOrderByTimes(order.items, order, doneLine)}
    </OrderContent>
    <OrderFooter>
      <TextRow>Remarks</TextRow>
      <OrderRemarks>{order.remarks}</OrderRemarks>
    </OrderFooter>
    {!order.isFinished ? (
      <DoneOrderButton onClick={() => done(order)}>Done Order</DoneOrderButton>
    ) : null}
    {!order.isFinished ? (
      <PrintOrderButton onClick={() => printOrder(order)}>
        Print Order
      </PrintOrderButton>
    ) : null}
    {order.isCancelled && (
      <Button onClick={() => uncancelOrder(order)}>Uncancel Order</Button>
    )}
  </OrderCard>
);

export default observer(Order);
