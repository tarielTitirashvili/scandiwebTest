import React, { Component } from 'react'
import styled from 'styled-components'
import EmptyCart from '../../../../../assets/EmptyCart.svg'
import DropdownCart from '../../DropdownCart'

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
`
const CartButtonCOntainer = styled.div`
position: relative;
cursor: pointer;
`
const CartDropdownContainer = styled.div`
position: absolute;
right: 72px;
width: 325px;
max-height: 677px;
overflow: auto;
background-color:${props=>props.color || props.theme.colors.white};
`
const ScreenDarker = styled.div`
position: absolute;
top: 52px;
right: -101px;
width: 100vw;
height: ${props=> props.height+'px' || 'calc(100vh - 80px)'};
background-color: #39374838;
`

export default class Cart extends Component {
  constructor(props){
    super(props)
    this.state={
      productsInCart: 0,
      products: []
    }
  }
  componentDidUpdate(prevProps){
    let cart = JSON.parse(localStorage.getItem('cart'))
    if(prevProps.cartChanged!==this.props.cartChanged){
      if(cart){
        this.setState(({
          productsInCart: cart.length
        }))
      }
    }
    if(this.props.cartOpen){
      if(cart){
        if(this.state.products.length !== cart.length){
          this.state.products.forEach(product=>product.count)
          this.setState(({
            products: cart
          }))
        }
      }
    }
  }
  componentDidMount(){
    let cart = JSON.parse(localStorage.getItem('cart'))
    if(cart){
      this.setState(({
        productsInCart: cart.length
      }))
    }
  }
  generateHight=()=>{
    let winHeight = window.innerHeight
    let rootDivHeight = document.getElementById("root").clientHeight
    if(winHeight<rootDivHeight){
      return rootDivHeight - 80
    }else{
      return winHeight - 80
    }
  }
  render() {
    console.log(window.innerHeight)
    return (
      <CartButtonCOntainer 
        onClick={this.props.onCartButtonClick}
      >      
        <CartCount>
          {this.state.productsInCart}
        </CartCount>
        <img src={EmptyCart} alt = 'EmptyCart' />
        {
          this.props.cartOpen?
          <ScreenDarker height = {this.generateHight()}>
            <CartDropdownContainer>
              <DropdownCart 
                currency = {this.props.currency} 
                products = {this.state.products} 
              />
            </CartDropdownContainer>
          </ScreenDarker>
          :''
        }
      </CartButtonCOntainer>
    )
  }
}
