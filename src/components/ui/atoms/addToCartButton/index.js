import React, { Component } from 'react'
import EmptyCart from '../../../../assets/EmptyCartWhite.svg'
import styled from 'styled-components';
import WithOnAddToCart from '../../../hoc/withOnAddToCart';

const StyledCircle = styled.div`
position: absolute;
top: -50px;
left: ${props=> props.left || '280px' };
width: 38px;
height: 36.6px; 
background-color: ${props=>props.backgroundColor || props.theme.colors.primary};
border-radius: 100%;
padding-top: 15.4px; 
padding-left: 14px;
`

 class AddToCartButton extends Component {

  render() {
    return (
      <StyledCircle
        id='AddToCartButton'
        onClick={e=>{
          e.stopPropagation()
          e.preventDefault()
          this.props.onAddToCart([this.props.product.attributes])
        }} 
        left={this.props.left}
      >
        <img src={EmptyCart} alt={'cart'}/>
      </StyledCircle>
    )
  }
}

export default WithOnAddToCart(AddToCartButton)