import React, { Component } from 'react';
import styled from 'styled-components';
import withCartFunctionality from '../../hoc/withCartFunctionality';
import withTotalPrice from '../../hoc/withTotalPrice';
import CartPage from '../../ui/organisms/cartPage';
import { SmallTitle } from '../../ui/styles/titles';

const CartTitle = styled(SmallTitle)`
cursor: text; 
font-size: 2rem; 
font-weight: 700;
margin: 80px 0 55px 0;
`;

class Cart extends Component {
  componentDidUpdate(prevProps){
    let cart = JSON.parse(localStorage.getItem('cart'));
    if(cart!==null){
      if(
        this.props.products.length !== cart.length && 
        this.props.quantity!==prevProps.quantity
      ){
        this.props.products.forEach(product=>product.count);
        this.props.setProducts(cart);
      };
    };
  };
  componentWillUnmount(){
    if(this.props.products===null){
      localStorage.setItem('cart', JSON.stringify(this.props.products));
    }else{
      localStorage.setItem('cart', JSON.stringify([...this.props.products]));
    };
  };
  render() {
    return (
      <div>
        <CartTitle >
          CART
        </CartTitle> 
            <CartPage
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
      </div>
    );
  };
};

export default withCartFunctionality(
  withTotalPrice(
    Cart
    )
  );