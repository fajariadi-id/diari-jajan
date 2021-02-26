import React from 'react';
import Button from '../Button/Button';
import {
  ModalContainer,
  ModalInput,
  ModalTitle,
  BtnContainer,
  ModalOverlay,
} from './Modal.element';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../actions';

const Modal = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <ModalOverlay modal={modal}>
      <ModalContainer>
        <ModalTitle>Tambah Entri</ModalTitle>

        <label htmlFor='name'>Nama</label>
        <ModalInput type='text' placeholder='ex: martabak pandan' />

        <label htmlFor='price'>Harga</label>
        <ModalInput type='text' placeholder='ex: 25000' />

        <BtnContainer>
          <Button
            title='BATAL'
            color='#999'
            onClick={() => dispatch(closeModal())}
          />
          <Button
            title='KIRIM'
            color='#3730A3'
            onClick={() => console.log('kirim')}
          />
        </BtnContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
