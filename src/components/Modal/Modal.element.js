import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #0000004d;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({ modal }) => (modal ? 'visible' : 'hidden')};
`;

export const ModalContainer = styled.form`
  background-color: white;
  padding: 20px;
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 100%;
  max-width: 400px;

  &::before {
    content: '';
    height: 100%;
    width: 100%;
    background-color: red;
  }
`;

export const ModalTitle = styled.h1`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const ModalInput = styled.input`
  display: block;
  outline: none;
  border: 1px solid #ddd;
  padding: 10px;
  font-family: inherit;
  margin: 5px 0 20px;
  width: 100%;
  border-radius: 5px;
  font-size: 18px;

  &:focus {
    border: 2px solid #3730a3;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;
