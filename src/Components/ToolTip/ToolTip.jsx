import React from 'react';
import styled from 'styled-components';
import 'style/ToolTip.css';

const ToolTip = ({productList, selectItem}) => {
    return <div>
        {
            productList && productList.map(product => {
                return (
                    <div key={product.productId}>
                        <DivTooltip 
                            pointX={product.pointX} 
                            pointY={product.pointY}
                            selectItem={selectItem}
                            productId={product.productId}
                            >
                        <TooltipImage imageUrl={product.imageUrl} />
                        {product.outside
                            ?
                            <div className="tooltip_desc">
                                <div className="tooltip_desc-funiture-name">
                                    {product.productName}
                                </div>
                                <div className="tooltip_desc-funiture-price">
                                    <span className="expected-price-label">예상가</span>
                                    <span className="price-discount">{product.priceDiscount}</span>
                                </div>
                            </div>
                            :
                            <div className="tooltip_desc">
                                <div className="tooltip_desc-funiture-name">
                                    {product.productName}
                                </div>
                                <div className="tooltip_desc-funiture-price">
                                    <span className="tooltip_desc-funiture-price-discount">{product.discountRate}%</span>
                                <span className="price-discount">{product.priceDiscount}</span>
                                </div>
                            </div>
                            }
                            <div className="tooltip_move-icon-wrapper">
                                <img className="tooltip_move-icon" src="./img/more.png" alt="상품 정보 보기" />
                            </div>
                        </DivTooltip>
                    </div>
                    
                );
            })
        }
    </div>;
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
    top: ${props => props.pointX && (props.pointX * 1.6)}px;
    left: ${props => props.pointY && (props.pointY * 1.6 + 11)}px;
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