import React from 'react';
import commaNumber from 'utils/commaNumber'
import styled, { css } from 'styled-components';
import 'style/ToolTip.css';

const ToolTip = ({product, selectItem}) => {
    return <DivTooltip 
                pointX={product.pointX} 
                pointY={product.pointY}
                selectItem={selectItem}
                productId={product.productId}
                BottomBox={product.pointX < 250 ? false : true}
                leftBox={product.pointY < 250 ? false : true}
                >
            <TooltipImage imageUrl={product.imageUrl} />
                <div className="tooltip_desc">
                    <div className="tooltip_desc-funiture-name">
                        {product.productName}
                    </div>
                    {
                    product.outside 
                    ? 
                    <div className="tooltip_desc-funiture-price">
                        <span className="expected-price-label">예상가</span>
                        <span className="price-discount">{commaNumber(product.priceDiscount)}</span>
                    </div>
                    :
                    <div className="tooltip_desc-funiture-price">
                        <span className="tooltip_desc-funiture-price-discount">{product.discountRate}%</span>
                        <span className="price-discount">{commaNumber(product.priceDiscount)}</span>
                    </div>
                    }
                </div>
                <div className="tooltip_move-icon-wrapper">
                    <img className="tooltip_move-icon" src="./img/more.png" alt="상품 정보 보기" />
                </div>
            </DivTooltip>;
};

const DivTooltip = styled.div`
    display: ${props => props.selectItem === props.productId ? 'flex' : 'none'};
    position: absolute;
    width: 220px;
    height: 86px;
    margin: 16px 0;
    padding: 8px 0 8px 8px;
    color: #4a4a4a;
    font-size: 14px;
    background-color: white;
    border-radius: 7px;
    box-shadow: 3px 3px 8px 0 rgba(0, 0, 0, 0.2);
    // top: ${props => props.pointX && (props.pointX * 1.6)}px;
    // left: ${props => props.pointY && (props.pointY * 1.6 + 11)}px;
    z-index: 1000;
    &:before {
        content: '';
        position: absolute;
        top: -8px;
        left: 30px;
        width: 12px;
        height: 8px;
        background-image: url(//cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png);
        background-size: cover;
        background-repeat: no-repeat;
        z-index: 1100;
    }
    ${props =>
    props.BottomBox
        ? css`
            top: ${props => props.pointX && (props.pointX * 1.6) - 114}px;
            left: ${props => props.pointY && (props.pointY * 1.6 - 10)}px;
            &:before {
            top: unset;
            bottom: -8px;
            transform: rotate(180deg);
            }
        `
        : css`
            top: ${props => props.pointX && (props.pointX * 1.6) + 24}px;
            left: ${props => props.pointY && (props.pointY * 1.6 - 10)}px;
        `}
    ${props =>
    props.leftBox &&
    css`
        left: ${props => props.pointY && (props.pointY * 1.6 - 152)}px;
        &:before {
        left: unset;
        right: 36px;
        }
    `}
`

const TooltipImage = styled.div`
    width: 70px;
    height: 70px;
    margin-right: 8px;
    border-radius: 4px;
    flex-shrink: 0;
    background-position: center;
    background-size: cover;
    background-image: url(${props => props.imageUrl})
`

export default ToolTip;