import React, { useState, useEffect } from 'react';
import { ContentImage, ProductList } from './Components';
import { getData } from './api/Api';
import './style/reset.css';

function App() {
  const [items, setItems] = useState({});
  const [selectItem, setSelectItem] = useState('none');

  useEffect(() => {
    getData().then(res => {
      setItems(res);
    });
  }, [])

  const handleSelect = (value) => {
    setSelectItem(value);
  }

  return (
    <>
    <ContentImage 
      imageUrl={items.imageUrl} 
      id={items.id} 
      productList={items.productList} 
      handleSelect={handleSelect} 
      selectItem={selectItem}
    />
    <ProductList 
      productList={items.productList} 
      handleSelect={handleSelect} 
      selectItem={selectItem}
    />
    </>
  );
}

export default App;