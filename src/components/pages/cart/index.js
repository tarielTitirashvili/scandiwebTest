import React, { Component } from 'react';
import withCartFunctionality from '../../hoc/withCartFunctionality';
import CartPage from '../../ui/organisms/cartPage';
import { SmallTitle } from '../../ui/styles/titles';

class Cart extends Component {
  constructor(props){
    super(props);
    this.state={
      newAttributeSelected: false
    }
  }
  componentDidUpdate(prevProps, prevState){
    let cart = JSON.parse(localStorage.getItem('cart'));
    if(cart!==null&& this.props.quantity!==0){
      if(
        this.props.products.length !== cart.length && 
        this.props.quantity!==prevProps.quantity
      ){
        this.props.products.forEach(product=>product.count);
        this.props.setProducts(cart);
      };
    };
    if(this.state.newAttributeSelected!==prevState.newAttributeSelected){
      localStorage.setItem('cart', JSON.stringify(this.props.products))
    }
  };
  componentWillUnmount(){
    if(this.props.products===null){
      localStorage.setItem('cart', JSON.stringify(this.props.products));
    }else{
      localStorage.setItem('cart', JSON.stringify([...this.props.products]));
    };
  };
  setNewAttributeSelected=()=>{
    this.setState(prev=>(
      {
        newAttributeSelected: !prev.newAttributeSelected
      }
      ))
  }
  render() {
    return (
      <div>
        <SmallTitle cursor={'text'} size={'2rem'} weight={'700'} margin={'80px 0 55px 0'}>
          CART
        </SmallTitle> 
            <CartPage
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
              setNewAttributeSelected={this.setNewAttributeSelected}
            />
      </div>
    );
  };
};

export default withCartFunctionality(Cart);