import React, { useState, useEffect } from 'react';
import { ContentImage, ProductList, ToolTip } from 'Components';
import { getData } from 'api/Api';
import styled from 'styled-components';
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
    <MainWrapper>
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
      {/* <ToolTip 
        productList={items.productList} 
        selectItem={selectItem}
      /> */}
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: block;
  width: 800px;
  margin: 10px auto;
`

export default App;