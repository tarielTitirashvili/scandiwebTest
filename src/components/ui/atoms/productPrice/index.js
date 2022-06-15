import React, { Component } from 'react';
import styled from 'styled-components';

const PriceText = styled.p`
margin: ${props=>props.margin || '36px 0 10px 0'};
font-size: ${props=>props.size || '1.125rem'};
line-height: 1.125rem;
height: ${props=>props.height || 'auto'};
display: flex;
align-items: center;
color: ${props=>props.color || props.theme.colors.text};
font-weight: 700;
`;

const Price = styled(PriceText)`
margin: 0 0 20px 0;
font-size: 1.5rem;
height: 46px;
`

export default class ProductPrice extends Component {
  render() {
    return (
      <>
        <PriceText 
        >
          PRICE:
        </PriceText>
        {this.props.prices.map(price=>{
          if(this.props.currency===price.currency.symbol){
            return <Price 
              key={price.currency.symbol} 

            >
              {price.currency.symbol}{price.amount}
            </Price>;
          }else{
            return '';
          };
        })}
      </>
    );
  };
};
