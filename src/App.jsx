import React, { useState, useEffect } from 'react';
import { ContentImage, ProductList } from './Components';
import { getData } from './api/Api';
import './style/reset.css';

function App() {

  const [items, setItems] = useState({});

  useEffect(() => {
    getData().then(res => {
      setItems(res);
    });
  }, [])

  return (
    <>
    <ContentImage imageUrl={items.imageUrl} id={items.id} productList={items.productList} />
    <ProductList productList={items.productList} />
    </>
  );
}

export default App;