import React from 'react';
import styled from 'styled-components';
import 'style/ProductList.css';

const ProductList = ({productList}) => {
  return <div className="wrapper">
    {productList && productList.map(product => {
      return (
        <div className="item_pictrue" key={product.productId}>
          <SubImage imageUrl={product.imageUrl} />
        </div>
      )
    })}
  </div>;
};

const SubImage = styled.div`
  width: 106px;
  height: 106px;
  border: .5px solid #aaafb9;
  border-radius: 16px;
  background-image: url(${props => props.imageUrl && props.imageUrl})
`;

export default ProductList;
