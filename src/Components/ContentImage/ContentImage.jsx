import React from 'react';
import styled from 'styled-components';
import 'style/ContentImage.css'

const ContentImage = ({imageUrl, id, productList}) => {

  return <>
    <div className="start-view-content-image">
      <img 
        src={imageUrl} 
        id={`start_image_id_${id}`} 
        alt="인테리어 이미지" 
        width="800px" 
        height="auto"
        />
      {productList && productList.map(product => {
        console.log(product);
        return (
          <>
            <Tag key={product.productId} pointX={product.pointX} pointY={product.pointY}>
              <img className="tag_image" src="./img/plus_button.png" alt="자세히 보기" />
            </Tag>
          </>
          )
        })}
    </div>
  </>;
};

const Tag = styled.div`
  position: absolute;
  top: ${props => props.pointX && (props.pointX * 1.6)}px;
  left: ${props => props.pointY && (props.pointY * 1.6 + 11)}px;
  width: 40px;
  height: 40px;
`;


export default ContentImage;
