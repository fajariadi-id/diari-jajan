import React from 'react';
import {
  Card,
  ReceiptDate,
  ReceiptList,
  List,
  ReceiptTotal,
} from './Receipt.element';
import { months } from '../../../constant/months';
import { useSelector } from 'react-redux';

const Receipt = ({ date }) => {
  const { items } = useSelector((state) => state.receipt);

  const dateFormat = (date) => {
    const getNumberOfMonth = date.split('-')[1];
    const getMonth =
      getNumberOfMonth[0] === '0'
        ? months[getNumberOfMonth.slice(-1) - 1]
        : months[getNumberOfMonth];

    const getDate = date.split('-')[2];

    return `${getDate} ${getMonth}`;
  };

  const timeFormat = (created) => {
    const getNumberOfTime = created.split(' ')[1].split(':');
    const getHour = getNumberOfTime[0];
    const getMinutes = getNumberOfTime[1];

    return `${getHour}:${getMinutes}`;
  };

  const foods = items.filter((item) => item.created_at.split(' ')[0] === date);
  const getCost = foods.map((food) => food.cost);
  const sumCost = getCost.reduce((a, b) => a + b);

  const costFormat = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });

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
