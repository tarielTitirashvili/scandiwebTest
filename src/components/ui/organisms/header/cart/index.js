import React, { Component } from 'react';
import styled from 'styled-components';
import EmptyCart from '../../../../../assets/EmptyCart.svg';
import withCartFunctionality from '../../../../hoc/withCartFunctionality';
import withTotalPrice from '../../../../hoc/withTotalPrice';
import DropdownCart from '../../DropdownCart';

const CartCount = styled.p`
position: absolute;
top: -10px;
right: -10px;
height: 20px;
width: 20px;
display: flex;
align-items: center;
justify-content: center;
background: ${props=>props.background || props.theme.colors.text};
color: ${props=>props.color || props.theme.colors.white};
font-weight: 700;
font-size: 0.875rem;
border-radius: 100%;
`;
const CartButtonCOntainer = styled.div`
position: relative;
`;



class Cart extends Component {
  render() {
    return (
      <CartButtonCOntainer 
        onClick={()=>{
          this.props.onCartButtonClick();
          this.props.onCartStateChange();
        }}
      > 
        {
          this.props.quantity>0?
          <CartCount>
            {this.props.quantity}
          </CartCount>
          :''
        }   
        <img src={EmptyCart} alt = 'EmptyCart' />
        { 
          this.props.cartOpen? 
              <DropdownCart 
                name={this.props.name} 
                total = {this.props.total}
                onCartStateChange = {this.props.onCartStateChange}
                onClick = {this.props.onClick}
                onCheckOut = {this.props.onCheckOut}
                cartOpen = {this.props.cartOpen}
                quantity = {this.props.quantity}
                onChangeCount = {this.props.onChangeCount}
                currency = {this.props.currency} 
                products = {this.props.products} 
                onCartButtonClick={this.props.onCartButtonClick}
              />
            :
              '' 
        }
      </CartButtonCOntainer>
    );
  };
};

export default 
  withCartFunctionality(
    withTotalPrice(
      Cart
    )
  );