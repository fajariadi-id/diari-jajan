import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getItems } from './actions';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Receipts from './components/Receipts/Receipts';

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch(
        'https://db-kompas-json-server.herokuapp.com/items'
      );
      const data = await res.json();

      dispatch(getItems(data));
      setLoading(false);
    };

    fetchItems();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Modal />
      {loading && <h1 style={{ textAlign: 'center' }}>Loading...</h1>}
      <Receipts />
      <Footer />
    </>
  );
};

export default App;
