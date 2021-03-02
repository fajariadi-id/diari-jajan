import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getItems } from './actions';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Receipts from './components/Receipts/Receipts';

const App = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);

    const fetchItems = async () => {
      const res = await fetch(
        'https://db-kompas-json-server.herokuapp.com/items'
      );
      const data = await res.json();

      dispatch(getItems(data));
    };

    fetchItems();

    setLoading(false);
  }, [dispatch]);

  console.log(loading);

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
