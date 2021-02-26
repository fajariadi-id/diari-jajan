import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getItems } from './actions';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Receipts from './components/Receipts/Receipts';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch('http://localhost:5000/items');
      const data = await res.json();

      dispatch(getItems(data));
    };

    fetchItems();
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Modal />
      <Receipts />
    </div>
  );
};

export default App;
