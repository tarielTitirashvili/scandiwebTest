import React, { Component } from 'react';
import FlexContainer, { SpaceBetweenContainer } from '../../styles/flexContainer';
import CartImagePlayer from '../cartImagePlayer';
import { ProductBrandTitle } from './../../styles/titles/index';
import Attributes from './../attributes/index';
import DropdownProductQuantity from './../DropdownProductQuantity/index';
import { NavLink } from 'react-router-dom';
import { Text } from '../../styles/text';
import styled from 'styled-components';

const CartProductInfoWrapper = styled.div`
width: 320px;
`;

const CurrencyTitle = styled(Text)`
font-size: 1.5rem;
cursor: text;
font-weight: 700;
margin: 4px 0 20px 0;
`;
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
