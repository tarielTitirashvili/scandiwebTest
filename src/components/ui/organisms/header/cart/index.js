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
border-radius: 100%;`
const CartButtonCOntainer = styled.div`
position: relative;
cursor: pointer;
`
const CartDropdownContainer = styled.div`
position: absolute;
right: 72px;
width: 325px;
height: 600px;
background-color:${props=>props.color || props.theme.colors.white}
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
      productsInCart: 0
    }
  }
  componentDidUpdate(prevProps){
    if(prevProps.cartChanged!==this.props.cartChanged){
      let cart = JSON.parse(localStorage.getItem('cart'))
      if(cart){
        this.setState(({
          productsInCart: cart.length
        }))
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
  render() {
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
          <ScreenDarker height = {document.getElementById("root").clientHeight-80}>
            <CartDropdownContainer>
              <DropdownCart />
            </CartDropdownContainer>
          </ScreenDarker>
          :''
        }
        
      </CartButtonCOntainer>
    )
  }
}
