import React, { Component } from 'react';
import { Text } from '../../styles/titles';
import FlexContainer from '../../styles/flexContainer/index';
import CartProduct from '../../molecules/cartProduct';
import CartButton from '../../styles/Button';
import styled from 'styled-components';

const Divider = styled.div`
background-color: ${props=>props.color || props.theme.colors.divider};
height: 1px;
width: 100%;
`;

class CartPage extends Component {
  checkOut=()=>{
    console.log(`${this.props.currency}${this.props.total}`);
    this.props.onCheckOut();
  };
  render() {
    return (
      <div >
        <FlexContainer display = {'inline'} >
          {this.props.products.map((product, index)=>{
            return<div key={`${product.product.id}${index}`}>
              <Divider/>
              <CartProduct
                onCartStateChange = {this.props.onCartStateChange}
                onChangeCount = {this.props.onChangeCount}
                product = {product}
                index = {index}
                currency = {this.props.currency}
              />
            </div>
          })}
        <Divider/>
        </FlexContainer>
        <FlexContainer 
          margin={'32px 0 8px 0'} 
          justify={'left'} 
        >
          <Text 
            cursor={'text'}  
            margin={'0'} 
          >
          Tax 21%: 
          </Text>
          <Text 
            cursor={'text'} 
            weight={'700'} 
            margin = {'0 0 0 4px'}
          >
            {this.props.currency}{Math.round(this.props.total*0.21*100)/100}
          </Text>
        </FlexContainer>
        <FlexContainer 
          margin={'0 0 8px 0'} 
          justify={'left'} 
        >
          <Text 
            cursor={'text'}  
            margin={'0'} 
          >
            Quantity:  
          </Text>
          <Text 
            cursor={'text'} 
            weight={'700'} 
            margin = {'0 0 0 4px'}
          >
            {this.props.quantity}
          </Text>
        </FlexContainer>
        <FlexContainer 
          margin={'0 0 16px 0'} 
          justify={'left'}
        >
          <Text 
            cursor={'text'} 
            margin={'0'} 
            weight={'500'}
          >
            Total:
          </Text>
          <Text 
            cursor={'text'} 
            weight={'700'}  
            margin = {'0 0 0 4px'}
          >
           {this.props.currency}{this.props.total}
          </Text>
        </FlexContainer>
        <FlexContainer>
          <div style={{width: '279px', height: '43px', marginBottom: '200px'}}>
            <CartButton 
              onClick={this.checkOut} 
              size={'0.875rem'} 
              padding={'13.1px'}
            >
              ORDER
            </CartButton>
          </div>
        </FlexContainer>
      </div>
    );
  };
};

export default CartPage;