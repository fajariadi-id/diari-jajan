import React, { useState } from 'react';
import Button from '../Button/Button';
import {
  ModalContainer,
  ModalInput,
  ModalTitle,
  BtnContainer,
  ModalOverlay,
} from './Modal.element';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, addItems } from '../../actions';
import { getItemCreated } from '../../functions';

const Modal = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const receipt = useSelector((state) => state.receipt);
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const prevId = receipt.length;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    !isNaN(e.target.value) && setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return alert('masukkan nama');
    if (!price) return alert('masukkan harga');

    dispatch(addItems(prevId, name, price, getItemCreated()));

    setName('');
    setPrice('');
  };

  return (
    <ModalOverlay modal={modal}>
      <ModalContainer onSubmit={handleSubmit}>
        <ModalTitle>Tambah Entri</ModalTitle>

        <label htmlFor='name'>Nama</label>
        <ModalInput
          type='text'
          placeholder='ex: martabak pandan'
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor='price'>Harga</label>
        <ModalInput
          type='text'
          placeholder='ex: 25000'
          value={price}
          onChange={handlePriceChange}
        />

        <BtnContainer>
          <Button
            title='BATAL'
            color='#999'
            type='button'
            onClick={() => dispatch(closeModal())}
          />
          <Button
            title='KIRIM'
            type='submit'
            color='#3730A3'
            onClick={() => dispatch(closeModal())}
          />
        </BtnContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
