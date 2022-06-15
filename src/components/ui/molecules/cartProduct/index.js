import React, { Component } from 'react';
import FlexContainer, { SpaceBetweenContainer } from '../../styles/flexContainer';
import CartImagePlayer from '../cartImagePlayer';
import { SmallTitle } from './../../styles/titles/index';
import Attributes from './../attributes/index';
import DropdownProductQuantity from './../DropdownProductQuantity/index';
import { NavLink } from 'react-router-dom';
import { Text } from '../../styles/text';
import styled, { css } from 'styled-components';

const CartProductInfoWrapper = styled.div`
width: 320px;
`
const ProductBrandTitle = styled(SmallTitle)`
font-weight: 600;
font-size: 1.875rem;
line-height:27px;
margin: 0 0 16px 0;
cursor: pointer;
${props =>props.nameTitle && css`
weight: 400;
margin: 0;
`
}
`
const CurrencyTitle = styled(Text)`
font-size: 1.5rem;
cursor: text;
font-weight: 700;
margin: 4px 0 8px 0;
`
export default class CartProduct extends Component {
  render() {
    return (
      <SpaceBetweenContainer cartProduct>
        <CartProductInfoWrapper>
          <NavLink to={`/product/${this.props.product.product.id}`}>
            <ProductBrandTitle>
              {this.props.product.product.brand}
            </ProductBrandTitle>
          </NavLink>
          <NavLink to={`/product/${this.props.product.product.id}`}>
            <ProductBrandTitle nameTitle>
              {this.props.product.product.name}
            </ProductBrandTitle>
          </NavLink>
          <CurrencyTitle>
            {this.props.currency}
            {
              this.props.product.product.prices.map(price=>{
                return price.currency.symbol===this.props.currency?
                  price.amount
                :
                  ''
              })
            }
          </CurrencyTitle>
          {
            this.props.product.product.attributes.map(attribute=>{
              return<Attributes 
                key={attribute.id} 
                attribute = {attribute} 
                selected={this.props.product.selectedAtr} 
                index = {this.props.index}
              />
            })
          }
        </CartProductInfoWrapper>
        <FlexContainer lowZIndex>
          <DropdownProductQuantity 
            onCartStateChange = {this.props.onCartStateChange}
            onChangeCount = {this.props.onChangeCount} 
            index = {this.props.index} 
            quantity = {this.props.product.quantity}
          />
          <CartImagePlayer 
            name={this.props.product.product.name} 
            gallery={this.props.product.product.gallery}
          />
        </FlexContainer>
      </SpaceBetweenContainer>
    );
  };
};
