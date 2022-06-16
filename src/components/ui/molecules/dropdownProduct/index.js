import React, { Component } from 'react';
import { SmallTitle } from '../../styles/titles';
import Attributes from '../attributes';
import styled from 'styled-components';
import { SpaceBetweenContainer } from '../../styles/flexContainer';
import DropdownProductQuantity from '../DropdownProductQuantity';
import { Text } from '../../styles/text';

const ImageContainer = styled.div`
width: 121px;
height: 190px;
`;

const ProductTitle = styled(SmallTitle)`
cursor: text;
font-weight: 300;
margin: 0;
`;
const CurrencyTitle = styled(Text)`
cursor: text;
font-weight: 500;
margin: 4px 0 8px 0;
`;

const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;
const CartProductInfoWrapper = styled.div`
width: 136px;
`;

export default class DropdownProduct extends Component {
  render() {
    return (
    <SpaceBetweenContainer dropdownCart>
      <CartProductInfoWrapper>
      <ProductTitle>
          {this.props.product.product.brand}
        </ProductTitle>
        <ProductTitle>
          {this.props.product.product.name}
        </ProductTitle>
        <CurrencyTitle>
          {this.props.currency}
          {this.props.product.product.prices.map(price=>{
            return price.currency.symbol===this.props.currency?price.amount:''
          })}
        </CurrencyTitle>
        {
          this.props.product.product.attributes.map(attribute=>{
            return<Attributes 
              cartDropdown = {true}
              key={attribute.id} 
              attribute = {attribute} 
              selected={this.props.product.selectedAtr} 
            />
          })
        }
      </CartProductInfoWrapper>
      <DropdownProductQuantity 
        onCartStateChange = {this.props.onCartStateChange}
        onChangeCount = {this.props.onChangeCount} 
        index = {this.props.index} 
        quantity = {this.props.product.quantity}
      />
      <ImageContainer>
        <Img 
          src={this.props.product.product.gallery[0]} 
          alt = {this.props.product.product.name}
        />
      </ImageContainer>
    </SpaceBetweenContainer>
  )};
};
