import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { costFormat } from '../../constant';
import { getAllCost } from '../../functions';
import { openModal } from '../../actions';

const Header = () => {
  const receipt = useSelector((state) => state.receipt);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <h1>Diari Jajan Februari 2021</h1>
      <p>Pengeluaran Bulan Ini {costFormat.format(getAllCost(receipt))}</p>

      <Button
        title='TAMBAH ITEM'
        color='#3730A3'
        onClick={() => dispatch(openModal())}
      />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  text-align: center;
  margin: 4rem 0 3rem;

  & > p {
    margin-bottom: 2rem;
    font-size: 24px;
  }
`;

export default Header;
