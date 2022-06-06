import React, { Component } from 'react';
import { SmallTitle, Text } from '../../styles/titles';
import Attributes from '../attributes';
import styled from 'styled-components';
import FlexContainer from '../../styles/flexContainer';
import DropdownProductQuantity from '../DropdownProductQuantity';

const ImageContainer = styled.div`
width: 121px;
height: 190px;
`;

export default class DropdownProduct extends Component {
  render() {
    return (
    <FlexContainer justify = {'space-between'} margin = {'40px 0'} >
      <div style={{width: '136px'}}>
      <SmallTitle 
          cursor={'text'} 
          weight={'300'}
          margin={'0'}
        >
          {this.props.product.product.brand}
        </SmallTitle>
        <SmallTitle 
          cursor={'text'} 
          weight={'300'} 
          margin={'0'}
        >
          {this.props.product.product.name}
        </SmallTitle>
        <Text 
          cursor={'text'} 
          weight={'500'}
          margin={'4px 0 8px 0'}
        >
          {this.props.currency}
          {this.props.product.product.prices.map(price=>{
            return price.currency.symbol===this.props.currency?price.amount:''
          })}
        </Text>
        {
          this.props.product.product.attributes.map(attribute=>{
            return<Attributes 
              cartDropdown = {true}
              key={attribute.id} 
              attribute = {attribute} 
              selected={this.props.product.selectedAtr} 
              pushSelectedAtr={this.props.pushSelectedAtr}
              index = {this.props.index}
            />
          })
        }
      </div>
      <DropdownProductQuantity 
        onCartStateChange = {this.props.onCartStateChange}
        onChangeCount = {this.props.onChangeCount} 
        index = {this.props.index} 
        quantity = {this.props.product.quantity}
      />
      <ImageContainer>
        <img 
          src={this.props.product.product.gallery[0]} 
          alt = {this.props.product.product.name}
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
      </ImageContainer>
    </FlexContainer>
  )};
};
