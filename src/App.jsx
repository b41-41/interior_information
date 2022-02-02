import React, { useState, useEffect } from 'react';
import { ContentImage, ProductList } from './Components';
import { getData } from './api/Api';

function App() {

  const [items, setItems] = useState({});

  useEffect(() => {
    getData().then(res => {
      setItems(res);
    });
  }, [])

  console.log(items);

  return (
    <>
    <ContentImage imageUrl={items.imageUrl} productList={items.productList} />
    <ProductList productList={items.productList} />
    </>
  );
}

export default App;