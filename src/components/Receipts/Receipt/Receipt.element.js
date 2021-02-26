import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #eaeaea;
  width: 100%;
  max-width: 300px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.1);
`;

export const ReceiptDate = styled.h1`
  font-size: 20px;
`;

export const ReceiptList = styled.ul``;

export const List = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  border-top: 1px solid #eaeaea;
  margin: 10px 0;
  padding-top: 5px;

  & > span:nth-child(2) {
    flex: 1;
  }

  & > span {
    text-transform: capitalize;
  }
`;

export const ReceiptTotal = styled.div`
  display: flex;
  gap: 30px;
  justify-content: flex-end;
  border-top: 3px solid #eaeaea;
  padding: 5px 0;

  & > span {
    font-weight: 700;
  }
`;
