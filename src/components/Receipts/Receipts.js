import React from 'react';
import Receipt from './Receipt/Receipt';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Receipts = () => {
  const { items } = useSelector((state) => state.receipt);

  const getUniqueDates = (items) => {
    if (!items) return [];

    const uniqueDate = items
      .map((item) => item.created_at.split(' ')[0])
      .filter((item, index, arr) => arr.indexOf(item) === index);

    return uniqueDate.sort((a, b) => b.split('-')[2] - a.split('-')[2]);
  };

  return (
    <ReceiptContainer>
      {getUniqueDates(items).map((date, index) => (
        <Receipt key={index} date={date} />
      ))}
    </ReceiptContainer>
  );
};

const ReceiptContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export default Receipts;
