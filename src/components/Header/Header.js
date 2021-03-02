import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { costFormat } from '../../constant';
import { getAllCost, headerDateFormat } from '../../functions';
import { openModal } from '../../actions';
import { months } from '../../constant';

const Header = () => {
  // connect to receiptReducer
  const receipt = useSelector((state) => state.receipt);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <h1>Diari Jajan {headerDateFormat(months)}</h1>
      <p>Pengeluaran Bulan Ini {costFormat.format(getAllCost(receipt))}</p>

      <Button
        title='TAMBAH ITEM'
        color='#3730A3'
        onClick={() => dispatch(openModal())}
      />

      <Pesan>
        Saran/masukan untuk perbaikan{' '}
        <a href='https://kompas.id'>https://kompas.id</a>
      </Pesan>
      <TextContainer>
        <p>
          Sebagai website penyedia berita, <em>Kompas.id</em> terlihat rapi dan
          baik. Tidak banyak iklan yang mengganggu dan semacamnya.
        </p>
        <p>
          Sebagai website penyedia berita juga <em>Kompas.id</em> terbilang
          sangat informatif. Tentu sebagai penyedia berita ingin informasinya
          dapat dinikmati setiap kalangan. Untuk menggapai setiap kalangan
          tersebut, mungkin dengan memberikan tampilan yang sedikit berbeda
          mampu menarik minat pembaca serta nyaman untuk selalu mengakses berita
          di <em>Kompas.id</em>.
        </p>
      </TextContainer>
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

  @media (max-width: 720px) {
    padding: 0 20px;
  }
`;

const Pesan = styled.span`
  display: block;
  margin: 20px auto 0;
  background-color: #00599a;
  color: white;
  width: fit-content;
  padding: 5px 10px;
  border-radius: 5px;
`;

const TextContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 10px auto 0;
`;

export default Header;
