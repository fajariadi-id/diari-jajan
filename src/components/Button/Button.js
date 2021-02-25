import React from 'react';
import styled from 'styled-components';

const Button = ({ title, color, onClick }) => {
  return (
    <BtnComponent color={color} onClick={onClick}>
      {title}
    </BtnComponent>
  );
};

const BtnComponent = styled.button`
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${({ color }) => color};
  color: white;
  border-radius: 5px;
`;

export default Button;
