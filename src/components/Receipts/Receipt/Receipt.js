import React from 'react';
import {
  Card,
  ReceiptDate,
  ReceiptList,
  List,
  ReceiptTotal,
} from './Receipt.element';
import { costFormat } from '../../../constant';
import { useSelector } from 'react-redux';
import { timeFormat, dateFormat } from '../../../functions';

const Receipt = ({ date }) => {
  const receipt = useSelector((state) => state.receipt);

  const foods = receipt.filter(
    (item) => item.created_at.split(' ')[0] === date
  );
  const getCost = foods.map((food) => food.cost);
  const sumCost = getCost.reduce((acc, value) => acc + value);

  return (
    <Card>
      <ReceiptDate>{dateFormat(date)}</ReceiptDate>

      <ReceiptList>
        {foods.map((food, index) => (
          <List key={index}>
            <span>{timeFormat(food.created_at)}</span>
            <span>{food.name}</span>
            <span>{costFormat.format(food.cost)}</span>
          </List>
        ))}
      </ReceiptList>

      <ReceiptTotal>
        <span>Total</span>
        <span>{costFormat.format(sumCost)}</span>
      </ReceiptTotal>
    </Card>
  );
};

export default Receipt;
