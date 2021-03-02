import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getItems } from './actions';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Receipts from './components/Receipts/Receipts';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch(
        'https://db-kompas-json-server.herokuapp.com/items'
      );
      const data = await res.json();

      dispatch(getItems(data));
    };

    fetchItems();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Modal />
      <Receipts />
      <Footer />
    </>
  );
};

export default App;
