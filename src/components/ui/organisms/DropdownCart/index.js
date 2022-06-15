import React, { Component } from 'react';
import styled from 'styled-components';
import withGenerateHeight from '../../../hoc/withGenerateHeight';
import DropdownCartButtons from '../../molecules/dropdownCartButtons';
import DropdownProduct from '../../molecules/dropdownProduct';
import FlexContainer, { ScreenDarker } from '../../styles/flexContainer';
import { Text } from '../../styles/titles';

const CartDropdownContainer = styled.div`
cursor: default;
position: absolute;
padding: 32px 16px;
right: 72px;
width: 310px;
max-height: 613px;
overflow: auto;
background-color:${props=>props.color || props.theme.colors.white};
::-webkit-scrollbar {
  width: 7px;
  background-color: ${props=>props.color || props.theme.colors.white};
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: ${props=> props.color || props.theme.colors.disabled};
  border-radius: 10px;
}
`;

class DropdownCart extends Component {
  render() {
    return (
      <ScreenDarker
      top={'-29.2px'}
      right={'-101px'}
      height={this.props.generateHight()}
      backgroundColor={'transparent'}
      display={`${ this.props.cartOpen? '':'none'}`} 
    >
      <ScreenDarker 
        height = {this.props.generateHight()}
        right={'0'}
        top={'80px'}
      >

        <CartDropdownContainer>
          <div  onClick={(e)=>e.stopPropagation()}>
            <FlexContainer 
              margin={'0 0 32px 0'} 
              justify={'left'} >
              <Text 
                cursor={'text'} 
                weight={'700'}  
                margin={'0'} 
              >
                My Bag, 
              </Text>
              <Text 
                cursor={'text'} 
                margin={'0 0 0 4px'}
              >
                {this.props.quantity} items
              </Text>
            </FlexContainer>
            <FlexContainer display = {'inline'} >
              {this.props.products.map((product, index)=>{
                return<DropdownProduct 
                  onCartStateChange ={this.props.onCartStateChange}
                  onChangeCount = {this.props.onChangeCount}
                  key={`${product.product.id}${index}`}
                  product = {product} 
                  index = {index}
                  pushSelectedAtr={this.props.pushSelectedAtr}
                  currency = {this.props.currency}
                />;
              })}
            </FlexContainer>
            <FlexContainer 
              margin={'32px 16px'} 
              justify={'space-between'}
            >
              <Text 
                fontFamily = {'\'Roboto\', sans-serif'} 
                cursor={'text'} 
                margin={'0'} 
                weight={'500'}
              >
                Total
              </Text>
              <Text 
                cursor={'text'} 
                weight={'700'}  
                margin={'0'} 
              >
              {this.props.currency}{this.props.total}
              </Text>
            </FlexContainer>
            <DropdownCartButtons 
              onClick = {this.props.onClick}
              currency={this.props.currency}
              total ={this.props.total} 
              onCartButtonClick = {this.props.onCartButtonClick} 
              onCheckOut = {this.props.onCheckOut}
            />
          </div>
        </CartDropdownContainer>
      </ScreenDarker>
      </ScreenDarker>

    );
  };
};

export default withGenerateHeight(DropdownCart)