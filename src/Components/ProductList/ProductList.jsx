import React from 'react';
import styled from 'styled-components';
import 'style/ProductList.css';

const ProductList = ({productList, handleSelect, selectItem}) => {

  
  return <div className="wrapper">
    {productList && productList.map(product => {
      return (
        <div key={product.productId}>
          <div className="item_pictrue" key={product.productId}>
          <SubImage 
            imageUrl={product.imageUrl} 
            productId={product.productId}
            selectItem={selectItem}
            onClick={() => {handleSelect(product.productId)}}
          />
          </div>
        </div>
      )
    })}
  </div>;
};

const SubImage = styled.div`
  width: 106px;
  height: 106px;
  border: ${props => props.productId === props.selectItem ? '2px solid red' : '.5px solid #aaafb9'}};
  border-radius: 16px;
  cursor: pointer;
  background-image: url(${props => props.imageUrl && props.imageUrl})
`;

export default ProductList;
