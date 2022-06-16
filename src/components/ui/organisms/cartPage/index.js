import React, { Component } from 'react';
import FlexContainer from '../../styles/flexContainer/index';
import CartProduct from '../../molecules/cartProduct';
import CartButton from '../../styles/Button';
import styled, { css } from 'styled-components';
import { Text } from '../../styles/text';
import { CartSummaryNumTitle } from '../../styles/titles';

const Divider = styled.div`
background-color: ${props=>props.color || props.theme.colors.divider};
height: 1px;
width: 100%;
`;
const Containers = styled(FlexContainer)`
margin: 32px 0 8px 0;
justify-content: left;
${props =>props.quantity && css`
  margin: 0 0 8px 0;
`
}
${props =>props.total && css`
  margin: 0 0 16px 0;
`
}
`;
const OrderWrapper = styled.div`
width: 279px;
height: 43px;
margin-bottom: 200px;
`;
const OrderButton = styled(CartButton)`
font-size: 0.875rem;
padding: 13.1px;
`;
const CartSummaryTitle = styled(Text)`
cursor: text;
margin: 0;
${props =>props.total && css`
  font-weight: 500;
`
}
`;

class CartPage extends Component {
  checkOut=()=>{
    console.log(`${this.props.currency}${this.props.total}`);
    this.props.onCheckOut();
  };
  render() {
    return (
      <div >
        <div>
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
        </div>
        <Containers>
          <CartSummaryTitle>
          Tax 21%: 
          </CartSummaryTitle>
          <CartSummaryNumTitle>
            {this.props.currency}{Math.round(this.props.total*0.21*100)/100}
          </CartSummaryNumTitle>
        </Containers>
        <Containers
          quantity
        >
          <CartSummaryTitle >
            Quantity:  
          </CartSummaryTitle>
          <CartSummaryNumTitle 
            quantity
          >
            {this.props.quantity}
          </CartSummaryNumTitle>
        </Containers>
        <Containers 
          total 
        >
          <CartSummaryTitle 
            total
          >
            Total:
          </CartSummaryTitle>
          <CartSummaryNumTitle 
            total
          >
           {this.props.currency}{this.props.total}
          </CartSummaryNumTitle>
        </Containers>
        <FlexContainer>
          <OrderWrapper>
            <OrderButton 
              onClick={this.checkOut} 
            >
              ORDER
            </OrderButton>
          </OrderWrapper>
        </FlexContainer>
      </div>
    );
  };
};

export default CartPage;