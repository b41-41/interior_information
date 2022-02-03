import React from 'react';
import styled from 'styled-components';
import 'style/ProductList.css';

const ProductList = ({productList, handleSelect, selectItem}) => {
  
  return <div className="wrapper">
    <Carousel productLength={productList && productList.length}>

    {productList && productList.map(product => {
      return (
        <div key={product.productId}>
          <div className="item_pictrue" key={product.productId}>
          <SubImage 
            imageUrl={product.imageUrl} 
            productId={product.productId}
            selectItem={selectItem}
            onClick={() => {handleSelect(selectItem === product.productId ? 'none' : product.productId)}}
            >
            {product.discountRate !== 0 && 
              <DiscountBadge>
                {product.discountRate}<span className="percent">%</span>
              </DiscountBadge>
            }
          </SubImage>
          </div>
        </div>
      )
    })}
    </Carousel>
  </div>;
};

const SubImage = styled.div`
  position: relative;
  width: 106px;
  height: 106px;
  border: ${props => props.productId === props.selectItem ? '2px solid red' : '.5px solid #aaafb9'}};
  border-radius: 16px;
  cursor: pointer;
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.imageUrl && props.imageUrl})
`;

const DiscountBadge = styled.div`
  position: absolute;
  width: 24px;
  height: 28px;
  top: 0;
  right: 5px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 11px;
  font-weight: bold;
  line-height: 25px;
  color: white;
  text-align: center;
  padding-left: 1px;
  background-image: url("./img/badge.png");
`;

const Carousel = styled.div`
  display: flex;
  width: 100%;
`

export default ProductList;
