import React, { Component } from 'react'
import { Text } from '../../styles/titles'
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
            return <PriceText 
              key={price.currency.symbol} 
              margin={'0 0 20px 0'}
              size={'1.5rem'}
              height = {'46px'}
            >
              {price.currency.symbol}{price.amount}
            </PriceText>
          }
        })}
      </>

    )
  }
}
