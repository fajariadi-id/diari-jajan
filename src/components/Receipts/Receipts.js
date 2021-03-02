import React from 'react';
import Receipt from './Receipt/Receipt';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getUniqueDates } from '../../functions';

const Receipts = () => {
  const receipt = useSelector((state) => state.receipt);

  return (
    <ReceiptContainer>
      {getUniqueDates(receipt).map((date, index) => (
        <Receipt key={index} date={date} />
      ))}
    </ReceiptContainer>
  );
};

const ReceiptContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export default Receipts;
