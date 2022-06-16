import React, { Component } from 'react';
import styled from 'styled-components';
import withGenerateHeight from '../../../hoc/withGenerateHeight';
import DropdownCartButtons from '../../molecules/dropdownCartButtons';
import DropdownProduct from '../../molecules/dropdownProduct';
import FlexContainer, { ScreenDarker, SpaceBetweenContainer } from '../../styles/flexContainer';
import { Text } from '../../styles/text';
import { CartSummaryNumTitle } from '../../styles/titles';

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
const BackgroundContainer = styled(ScreenDarker)`
top: -29.2px;
background-color: transparent;
`;
const BackgroundDarker = styled(ScreenDarker)`
right: 0;
top: 80px;
`;
const BagContainer = styled(FlexContainer)`
margin: 0 0 32px 0;
justify-content: left;
`;
const TotalTitle = styled(Text)`
font-family: 'Roboto', sans-serif;
cursor: text;
margin: 0;
font-weight: 500;
`;

class DropdownCart extends Component {
  render() {
    if(this.props.cartOpen)return(
      <BackgroundContainer
        height={this.props.generateHight()}
      >
        <BackgroundDarker 
          height = {this.props.generateHight()}
        >
          <CartDropdownContainer>
            <div  onClick={(e)=>e.stopPropagation()}>
              <BagContainer >
                <CartSummaryNumTitle 
                  dropdown
                >
                  My Bag, 
                </CartSummaryNumTitle>
                <Text 
                  dropdownBagItems
                >
                  {this.props.quantity} items
                </Text>
              </BagContainer>
              <div>
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
              </div>
              <SpaceBetweenContainer 
                dropdownTotalWrapper
              >
                <TotalTitle>
                  Total
                </TotalTitle>
                <CartSummaryNumTitle 
                  total
                >
                {this.props.currency}{this.props.total}
                </CartSummaryNumTitle>
              </SpaceBetweenContainer>
              <DropdownCartButtons 
                onClick = {this.props.onClick}
                currency={this.props.currency}
                total ={this.props.total} 
                onCartButtonClick = {this.props.onCartButtonClick} 
                onCheckOut = {this.props.onCheckOut}
              />
            </div>
          </CartDropdownContainer>
        </BackgroundDarker>
      </BackgroundContainer>
    );
    return <></>
  };
};

export default withGenerateHeight(DropdownCart);