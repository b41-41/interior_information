import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'style/ProductList.css';

const ProductList = ({productList, handleSelect, selectItem}) => {
  const [moveStartValue, setMoveStartValue] = useState(0);
  const [moveValue, setMoveValue] = useState(0);
  const [isMove, setIsMove] = useState(false);

  const carouselMoveEvent = (event) => {
    setMoveValue(event.screenX - moveStartValue);
    document.removeEventListener('mousemove', carouselMoveEvent);
  };
  
  const carouselDownEvent = (event) => {
    setMoveStartValue(event.screenX);
  }

  const carouselTouchStart = () => {
    setIsMove(true);
    document.addEventListener('mousedown', carouselDownEvent);
  };

  const carouselTouchLeave = () => {
    setIsMove(false);
    document.removeEventListener('mousedown', carouselDownEvent);
    document.removeEventListener('mousemove', carouselMoveEvent);
    moveValue > 0 && setMoveValue(0);
    moveValue < -100 && setMoveValue(-100);
  };

  const carouselTouchMove = () => {
    isMove 
    &&
    document.addEventListener('mousemove', carouselMoveEvent)
  }

  useEffect(() => {
    productList && 
    selectItem === productList[0].productId && setMoveValue(0);
    productList && 
    selectItem === productList[productList.length - 1].productId && setMoveValue(-100);
  }, [selectItem])

  return <div className="wrapper">
    <Carousel 
      productLength={productList && productList.length}
      onTouchStart={carouselTouchStart}
      onMouseDown={carouselTouchStart}
      onTouchEnd={carouselTouchLeave}
      onMouseUp={carouselTouchLeave}
      onTouchCancel={carouselTouchLeave}
      onMouseLeave={carouselTouchLeave}
      onTouchMove={carouselTouchMove}
      onMouseMove={carouselTouchMove}
      moveValue={moveValue}
    >

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
  transform: translate3d(${props => props.moveValue}px, 0px, 0px);
  // transition: 0.2s ease transform;
`

export default ProductList;
