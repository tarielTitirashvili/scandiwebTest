import React, { Component } from 'react';
import styled from 'styled-components';
import EmptyCart from '../../../../../assets/EmptyCart.svg';
import withCartFunctionality from '../../../../hoc/withCartFunctionality';
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
cursor: pointer;
`;
const CartDropdownContainer = styled.div`
cursor: default;
position: absolute;
padding: 32px 16px;
right: 72px;
width: 310px;
max-height: 613px;
overflow: auto;
background-color:${props=>props.color || props.theme.colors.white};
`;
const ScreenDarker = styled.div`
display: ${props=> props.display || 'block'};
position: absolute;
top: 52px;
right: -101px;
width: 100vw;
height: ${props=> props.height+'px' || 'calc(100vh - 80px)'};
background-color: #39374838;
`;

class Cart extends Component {
  componentDidUpdate(prevProps){
    let cart = JSON.parse(localStorage.getItem('cart'));
    if(this.props.cartOpen && prevProps.cartOpen===false){
      if(cart!==null){
        this.props.setProducts(cart);
      };
    };
    if(prevProps.cartOpen&&!this.props.cartOpen){
      if(this.props.products===null){
        localStorage.setItem('cart', JSON.stringify(this.props.products));
        this.props.onCartStateChange();
      }else{
        localStorage.setItem('cart', JSON.stringify([...this.props.products]));
        this.props.onCartStateChange();
      };
    };
  };
  generateHight=()=>{
    let winHeight = window.innerHeight;
    let rootDivHeight = document.getElementById("root").clientHeight;
    if(winHeight<rootDivHeight){
      return rootDivHeight - 80;
    }else{
      return winHeight - 80;
    };
  };
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
        <ScreenDarker 
          display={`${ this.props.cartOpen? '':'none'}`} 
          height = {this.generateHight()}
        >
          <CartDropdownContainer>
            <DropdownCart 
              onCartStateChange = {this.props.onCartStateChange}
              onClick = {this.props.onClick}
              onCheckOut = {this.props.onCheckOut}
              cartOpen = {this.props.cartOpen}
              quantity = {this.props.quantity}
              onChangeCount = {this.props.onChangeCount}
              onAtrSelect = {this.props.onAtrSelect}
              currency = {this.props.currency} 
              products = {this.props.products} 
              onCartButtonClick={this.props.onCartButtonClick}
            />
          </CartDropdownContainer>
        </ScreenDarker>
      </CartButtonCOntainer>
    );
  };
};

export default withCartFunctionality(Cart);